import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  quality?: number;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  placeholder,
  sizes = '100vw',
  loading = 'lazy',
  quality = 85
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Generate blur placeholder
  const generateBlurPlaceholder = (width: number = 40, height: number = 40) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#f3f4f6');
      gradient.addColorStop(1, '#e5e7eb');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    }
    
    return canvas.toDataURL('image/jpeg', 0.1);
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, loading]);

  // Optimize image URL with quality and format parameters
  const getOptimizedSrc = (originalSrc: string, width?: number, quality = 85) => {
    // For external images or when no optimization is needed
    if (originalSrc.startsWith('http') || originalSrc.startsWith('//')) {
      return originalSrc;
    }

    // Add optimization parameters for local images
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    params.set('q', quality.toString());
    params.set('f', 'webp');
    
    return `${originalSrc}?${params.toString()}`;
  };

  // Generate srcSet for responsive images
  const generateSrcSet = (src: string) => {
    if (!width) return undefined;
    
    const breakpoints = [480, 768, 1024, 1280, 1920];
    return breakpoints
      .filter(bp => bp <= width * 2) // Only include relevant breakpoints
      .map(bp => `${getOptimizedSrc(src, bp, quality)} ${bp}w`)
      .join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setError(true);
    setIsLoaded(true);
  };

  const blurDataURL = placeholder || generateBlurPlaceholder(width, height);

  return (
    <div 
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ 
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : 'auto',
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
    >
      {/* Blur placeholder */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${blurDataURL})`,
          filter: 'blur(10px)',
          transform: 'scale(1.1)'
        }}
        animate={{
          opacity: isLoaded ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main image */}
      {isInView && (
        <motion.img
          src={error ? blurDataURL : getOptimizedSrc(src, width, quality)}
          srcSet={!error ? generateSrcSet(src) : undefined}
          sizes={sizes}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          onError={handleError}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Loading state */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
          <div className="text-center">
            <div className="text-2xl mb-2">🖼️</div>
            <div className="text-sm">Image not available</div>
          </div>
        </div>
      )}
    </div>
  );
}

// Higher-order component for image gallery with lazy loading
interface ImageGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
  }>;
  columns?: number;
  spacing?: number;
}

export function ImageGallery({ 
  images, 
  columns = 3, 
  spacing = 16 
}: ImageGalleryProps) {
  return (
    <div 
      className="grid gap-4"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${spacing}px`
      }}
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-lg">
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
              loading={index < 6 ? 'eager' : 'lazy'} // Load first 6 images eagerly
            />
          </div>
          {image.caption && (
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {image.caption}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
}
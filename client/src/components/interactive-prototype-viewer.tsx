import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Maximize2, X, Play, Pause } from 'lucide-react';
import { modalVariants, overlayVariants, buttonHover } from '@/lib/framer-variants';

interface PrototypeViewerProps {
  src: string;
  title: string;
  type: 'figma' | 'principle' | 'framer' | 'invision' | 'axure';
  fullscreen?: boolean;
  description?: string;
  thumbnail?: string;
}

const prototypeConfig = {
  figma: {
    name: 'Figma',
    color: 'from-purple-500 to-pink-500',
    embedClass: 'figma-embed'
  },
  principle: {
    name: 'Principle',
    color: 'from-blue-500 to-cyan-500',
    embedClass: 'principle-embed'
  },
  framer: {
    name: 'Framer',
    color: 'from-indigo-500 to-blue-500',
    embedClass: 'framer-embed'
  },
  invision: {
    name: 'InVision',
    color: 'from-pink-500 to-rose-500',
    embedClass: 'invision-embed'
  },
  axure: {
    name: 'Axure',
    color: 'from-green-500 to-emerald-500',
    embedClass: 'axure-embed'
  }
};

export function InteractivePrototypeViewer({
  src,
  title,
  type,
  fullscreen = true,
  description,
  thumbnail
}: PrototypeViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const config = prototypeConfig[type];

  const handlePlay = () => {
    setIsPlaying(true);
    setIsLoaded(true);
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const openInNewTab = () => {
    window.open(src, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Prototype Preview Card */}
      <motion.div
        className="group relative bg-card border border-border rounded-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -4 }}
      >
        <div className="aspect-video bg-muted relative overflow-hidden">
          {!isPlaying && thumbnail ? (
            <div className="relative w-full h-full">
              <img
                src={thumbnail}
                alt={`${title} preview`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <motion.button
                  onClick={handlePlay}
                  className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground"
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Play size={24} className="ml-1" />
                </motion.button>
              </div>
            </div>
          ) : (
            <iframe
              src={src}
              title={title}
              className={`w-full h-full border-0 ${config.embedClass}`}
              allowFullScreen
              onLoad={() => setIsLoaded(true)}
            />
          )}
        </div>

        {/* Prototype Info */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-h3 font-semibold text-foreground mb-2">
                {title}
              </h3>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${config.color} text-white`}>
                {config.name}
              </div>
            </div>
            <div className="flex gap-2">
              {fullscreen && (
                <motion.button
                  onClick={openFullscreen}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                  variants={buttonHover}
                  whileHover="hover"
                  whileTap="tap"
                  title="View fullscreen"
                >
                  <Maximize2 size={18} />
                </motion.button>
              )}
              <motion.button
                onClick={openInNewTab}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                title="Open in new tab"
              >
                <ExternalLink size={18} />
              </motion.button>
            </div>
          </div>
          
          {description && (
            <p className="text-body text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {/* Loading State */}
        {isPlaying && !isLoaded && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full" />
          </div>
        )}
      </motion.div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={closeFullscreen}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-[95vw] h-[95vh] bg-background rounded-lg overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${config.color} text-white`}>
                    {config.name}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    onClick={openInNewTab}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                    variants={buttonHover}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <ExternalLink size={18} />
                  </motion.button>
                  <motion.button
                    onClick={closeFullscreen}
                    className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
                    variants={buttonHover}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <X size={18} />
                  </motion.button>
                </div>
              </div>

              {/* Prototype Iframe */}
              <div className="h-[calc(95vh-73px)]">
                <iframe
                  src={src}
                  title={title}
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Prototype Gallery Component
interface PrototypeGalleryProps {
  prototypes: Array<{
    title: string;
    url: string;
    type: 'figma' | 'principle' | 'framer' | 'invision' | 'axure';
    description?: string;
    thumbnail?: string;
  }>;
}

export function PrototypeGallery({ prototypes }: PrototypeGalleryProps) {
  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-h2 font-bold text-foreground mb-4">
          Interactive Prototypes
        </h2>
        <p className="text-body-lg text-muted-foreground">
          Explore the interactive prototypes that bring the design concepts to life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {prototypes.map((prototype, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <InteractivePrototypeViewer
              src={prototype.url}
              title={prototype.title}
              type={prototype.type}
              description={prototype.description}
              thumbnail={prototype.thumbnail}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
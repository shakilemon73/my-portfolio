import { cn } from '@/lib/utils';
import React from 'react';

// 8pt Spacing System - World-Class Alignment Standards
const SPACING_SCALE = {
  '1': '4px',   // 0.25rem - 4pt
  '2': '8px',   // 0.5rem  - 8pt  
  '3': '12px',  // 0.75rem - 12pt
  '4': '16px',  // 1rem    - 16pt
  '6': '24px',  // 1.5rem  - 24pt
  '8': '32px',  // 2rem    - 32pt
  '10': '40px', // 2.5rem  - 40pt
  '12': '48px', // 3rem    - 48pt
  '16': '64px', // 4rem    - 64pt
  '20': '80px', // 5rem    - 80pt
  '24': '96px', // 6rem    - 96pt
  '32': '128px' // 8rem    - 128pt
} as const;

export type SpacingScale = keyof typeof SPACING_SCALE;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide';
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  spacing?: 'default' | 'compact' | 'loose';
  background?: 'default' | 'subtle' | 'accent';
}

interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: SpacingScale;
  align?: 'start' | 'center' | 'end' | 'stretch';
}

interface ClusterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  gap?: SpacingScale;
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'center' | 'end' | 'stretch';
  wrap?: boolean;
}

// Container - Standardized width and padding for all sections
export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = 'default', className, ...props }, ref) => {
    const sizeClasses = {
      narrow: 'max-w-4xl',
      default: 'max-w-7xl',
      wide: 'max-w-8xl'
    };

    return (
      <div
        ref={ref}
        className={cn(
          // Standard container with responsive padding
          sizeClasses[size],
          'mx-auto px-4 sm:px-6 lg:px-8',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Container.displayName = 'Container';

// Section - Consistent vertical rhythm for all sections
export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, spacing = 'default', background = 'default', className, ...props }, ref) => {
    const spacingClasses = {
      compact: 'py-12 md:py-16',
      default: 'py-20 md:py-24',
      loose: 'py-24 md:py-32'
    };

    const backgroundClasses = {
      default: '',
      subtle: 'bg-charcoal/20',
      accent: 'bg-gradient-to-br from-deep-black via-charcoal to-deep-black'
    };

    return (
      <section
        ref={ref}
        className={cn(
          spacingClasses[spacing],
          backgroundClasses[background],
          className
        )}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = 'Section';

// Stack - Vertical spacing with consistent gaps
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ children, gap = '6', align = 'stretch', className, ...props }, ref) => {
    const gapClass = `gap-${gap}`;
    
    const alignClasses = {
      start: 'items-start',
      center: 'items-center', 
      end: 'items-end',
      stretch: 'items-stretch'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col',
          gapClass,
          alignClasses[align],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Stack.displayName = 'Stack';

// Cluster - Horizontal grouping with consistent spacing
export const Cluster = React.forwardRef<HTMLDivElement, ClusterProps>(
  ({ children, gap = '4', justify = 'start', align = 'center', wrap = true, className, ...props }, ref) => {
    const gapClass = `gap-${gap}`;
    
    const justifyClasses = {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end', 
      between: 'justify-between',
      around: 'justify-around',
      evenly: 'justify-evenly'
    };

    const alignClasses = {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch'
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          gapClass,
          justifyClasses[justify],
          alignClasses[align],
          wrap && 'flex-wrap',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Cluster.displayName = 'Cluster';

// Touch Target - Ensures minimum 48px touch targets
interface TouchTargetProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'default' | 'large';
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const TouchTarget = React.forwardRef<HTMLButtonElement, TouchTargetProps>(
  ({ children, size = 'default', variant = 'primary', className, ...props }, ref) => {
    const sizeClasses = {
      default: 'min-h-[48px] min-w-[48px]',
      large: 'min-h-[56px] min-w-[56px]'
    };

    const variantClasses = {
      primary: 'bg-gradient-to-r from-electric-cyan to-neon-pink text-deep-black font-bold',
      secondary: 'glass-morphism border-glass-border text-white hover:border-electric-cyan',
      ghost: 'text-white hover:bg-white/10'
    };

    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          'inline-flex items-center justify-center gap-3 rounded-xl font-medium transition-all duration-300',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-cyan focus-visible:ring-offset-2',
          'disabled:pointer-events-none disabled:opacity-50',
          // Size and variant
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
TouchTarget.displayName = 'TouchTarget';

// Grid - Consistent 12-column grid system
interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  cols?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: SpacingScale;
}

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ children, cols = 12, gap = '6', className, ...props }, ref) => {
    const colsClass = `grid-cols-${cols}`;
    const gapClass = `gap-${gap}`;

    return (
      <div
        ref={ref}
        className={cn(
          'grid',
          colsClass,
          gapClass,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Grid.displayName = 'Grid';

// Icon - Standardized icon sizing and alignment
interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ children, size = 'md', className, ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-4 h-4', // 16px
      md: 'w-5 h-5', // 20px  
      lg: 'w-6 h-6'  // 24px
    };

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center leading-none',
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Icon.displayName = 'Icon';
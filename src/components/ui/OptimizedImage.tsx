import React, { useState } from 'react';
import { DEFAULT_MARITIME_IMAGE, FALLBACK_SVG_DATA_URI } from '../../lib/imageUtils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  fallbackSrc?: string;
  aspectRatio?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  wrapperClassName = '',
  fallbackSrc = DEFAULT_MARITIME_IMAGE,
  aspectRatio,
  referrerPolicy = 'no-referrer',
  loading = 'lazy',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && currentSrc !== fallbackSrc) {
      setHasError(true);
      setCurrentSrc(fallbackSrc);
    } else if (currentSrc === fallbackSrc) {
      setCurrentSrc(FALLBACK_SVG_DATA_URI);
    }
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div
      className={`relative overflow-hidden bg-slate-950 ${wrapperClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Blur-up placeholder skeleton shimmer */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-900 animate-pulse flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]" />
        </div>
      )}

      {/* Actual image element */}
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        referrerPolicy={referrerPolicy}
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-md scale-105'
        } ${className}`}
        {...props}
      />
    </div>
  );
};

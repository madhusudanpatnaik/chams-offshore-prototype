import React from 'react';

// Default high-reliability fallback image for maritime & offshore engineering
export const DEFAULT_MARITIME_IMAGE = 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?q=80&w=1200&auto=format&fit=crop';

// SVG Data URI fallback when network/Unsplash is blocked
export const FALLBACK_SVG_DATA_URI = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230f172a"/><path d="M0 450 L200 350 L400 480 L600 320 L800 420 L800 600 L0 600 Z" fill="%231e293b"/><circle cx="400" cy="200" r="80" fill="%23f59e0b" opacity="0.15"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="%23f59e0b" font-family="sans-serif" font-size="24" font-weight="bold">CHAMS OFFSHORE ENGINEERING</text><text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" fill="%2394a3b8" font-family="monospace" font-size="14">CLASSIFICATION TECHNICAL FACILITY</text></svg>`;

export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  const target = e.currentTarget;
  if (target.src !== DEFAULT_MARITIME_IMAGE && !target.src.startsWith('data:image/svg+xml')) {
    target.src = DEFAULT_MARITIME_IMAGE;
  } else if (target.src === DEFAULT_MARITIME_IMAGE) {
    target.src = FALLBACK_SVG_DATA_URI;
  }
};

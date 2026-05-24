'use client';

import Image from 'next/image';
import { useState, useEffect, CSSProperties } from 'react';

interface LightboxImageProps {
  src: string;
  alt: string;
  imageClassName?: string;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
  sizes?: string;
}

export default function LightboxImage({
  src,
  alt,
  imageClassName = 'object-cover',
  wrapperClassName = '',
  wrapperStyle,
  sizes,
}: LightboxImageProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <div
        className={`relative cursor-zoom-in group ${wrapperClassName}`}
        style={wrapperStyle}
        onClick={() => setOpen(true)}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={imageClassName}
          sizes={sizes}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-end justify-end p-2">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-mono bg-black/70 px-2 py-1 rounded">
            expand ⤢
          </span>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setOpen(false)}
        >
          <button
            className="absolute top-4 right-5 text-slate-400 hover:text-white text-2xl font-light transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="relative w-full h-full max-w-5xl max-h-[90vh]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <p className="absolute bottom-4 left-0 right-0 text-center text-slate-500 text-xs font-mono">
            {alt} · click anywhere or press Esc to close
          </p>
        </div>
      )}
    </>
  );
}

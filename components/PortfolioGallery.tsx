"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

type PortfolioItem = {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  color: string;
};

const colorAccents: Record<string, string> = {
  red: "group-hover:border-red-300",
  blue: "group-hover:border-blue-300",
  green: "group-hover:border-green-300",
  yellow: "group-hover:border-yellow-300",
  orange: "group-hover:border-orange-300",
  pink: "group-hover:border-pink-300",
  neutral: "group-hover:border-neutral-300",
};

const colorDots: Record<string, string> = {
  red: "bg-red-400",
  blue: "bg-blue-400",
  green: "bg-green-400",
  yellow: "bg-yellow-400",
  orange: "bg-orange-400",
  pink: "bg-pink-400",
  neutral: "bg-neutral-400",
};

export default function PortfolioGallery({ items }: { items: PortfolioItem[] }) {
  const [lightbox, setLightbox] = useState<PortfolioItem | null>(null);
  const [imageLoading, setImageLoading] = useState(true);

  const closeLightbox = useCallback((): void => setLightbox(null), []);

  const openLightbox = useCallback((item: PortfolioItem): void => {
    setImageLoading(true);
    setLightbox(item);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const handleKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") {
        const idx = items.indexOf(lightbox);
        if (idx < items.length - 1) openLightbox(items[idx + 1]);
      }
      if (e.key === "ArrowLeft") {
        const idx = items.indexOf(lightbox);
        if (idx > 0) openLightbox(items[idx - 1]);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightbox, items, closeLightbox, openLightbox]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => openLightbox(item)}
            className={`group bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 text-left cursor-pointer ${colorAccents[item.color]}`}
          >
            <div className="relative aspect-3/4 overflow-hidden bg-neutral-100">
              {/* Skeleton shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-100 animate-pulse" />
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={75}
              />
              {/* Watermark */}
              <div className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none opacity-15">
                <Image src="/logo.svg" alt="" aria-hidden="true" width={200} height={200} className="w-1/2 h-auto" />
              </div>
              {/* Gradient overlay at bottom */}
              <div className="absolute z-10 inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
              {/* Category badge */}
              <div className="absolute top-3 right-3 z-10">
                <span className={`w-3 h-3 rounded-full block ${colorDots[item.color]}`} />
              </div>
              {/* Zoom icon on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-neutral-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-bold text-neutral-900 text-sm mb-1">{item.title}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">{item.description}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal — rendered via portal to escape stacking contexts */}
      {lightbox && createPortal(
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-110 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            aria-label="ปิด"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Nav arrows */}
          {items.indexOf(lightbox) > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openLightbox(items[items.indexOf(lightbox) - 1]);
              }}
              className="absolute left-4 z-110 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="ก่อนหน้า"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          {items.indexOf(lightbox) < items.length - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openLightbox(items[items.indexOf(lightbox) + 1]);
              }}
              className="absolute right-4 z-110 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
              aria-label="ถัดไป"
            >
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative max-w-4xl w-full max-h-[90vh] aspect-3/4"
            onClick={(e) => e.stopPropagation()}
          >
            {imageLoading && (
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 animate-pulse" />
            )}
            <Image
               src={lightbox.src}
               alt={lightbox.alt}
               fill
               className={`object-contain transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
               sizes="90vw"
               priority
               quality={75}
               onLoad={() => setImageLoading(false)}
             />
            {/* Watermark */}
            <div className="absolute z-10 inset-0 flex items-center justify-center pointer-events-none opacity-20">
               <Image src="/logo.svg" alt="" width={400} height={400} className="w-1/3 h-auto" />
             </div>
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-semibold">{lightbox.title}</p>
            <p className="text-white/60 text-sm">{lightbox.description}</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

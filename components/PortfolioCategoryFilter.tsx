"use client";

import { useState } from "react";
import PortfolioGallery from "@/components/PortfolioGallery";

type PortfolioItem = {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  color: string;
};

type Category = {
  id: string;
  label: string;
};

export default function PortfolioCategoryFilter({
  categories,
  items,
}: {
  categories: Category[];
  items: PortfolioItem[];
}) {
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? items : items.filter((i) => i.category === active);

  return (
    <>
      {/* Category Pills */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-all duration-200 cursor-pointer ${
                  active === cat.id
                    ? "border-primary bg-primary text-white shadow-sm"
                    : "border-neutral-200 text-neutral-700 hover:border-primary hover:text-primary hover:bg-primary-light/30"
                }`}
              >
                {cat.label}
                {cat.id !== "all" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({items.filter((i) => i.category === cat.id).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filtered Gallery */}
      <div className="relative py-16 lg:py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-sm text-neutral-500">
            แสดง {filtered.length} จาก {items.length} รายการ
          </div>
          <div
            key={active}
            className="animate-fade-up"
          >
            <PortfolioGallery items={filtered} />
          </div>
        </div>
      </div>
    </>
  );
}

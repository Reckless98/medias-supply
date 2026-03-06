"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "หน้าแรก" },
  { href: "/services/forms", label: "บริการ", hasDropdown: true },
  { href: "#portfolio", label: "ผลงาน" },
  { href: "/contact", label: "ติดต่อเรา" },
];

const serviceLinks = [
  { href: "/services/forms", label: "งานพิมพ์คอมพิวเตอร์ฟอร์ม" },
  { href: "/services/offset", label: "งานพิมพ์ออฟเซ็ท" },
  { href: "/services/stickers", label: "งานพิมพ์สติ๊กเกอร์" },
  { href: "/services/invoice", label: "งานพิมพ์ใบเสร็จ/ใบกำกับภาษี" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden lg:block bg-neutral-900 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9">
          <p className="text-neutral-400">
            68 ซอยงามวงศ์วาน 18 แยก 6/7 ต.บางเขน อ.เมืองนนทบุรี จ.นนทบุรี 11000
          </p>
          <div className="flex items-center gap-4">
            <a href="tel:0819226779" className="flex items-center gap-1.5 text-neutral-300 hover:text-secondary transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              081-922-6779
            </a>
            <a href="tel:0803406923" className="flex items-center gap-1.5 text-neutral-300 hover:text-secondary transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              080-340-6923
            </a>
            <a href="mailto:psmedia65@gmail.com" className="flex items-center gap-1.5 text-neutral-300 hover:text-secondary transition-colors">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              psmedia65@gmail.com
            </a>
          </div>
        </div>
      </div>
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.svg"
              alt="P.S. MEDIAS SUPPLY CO., LTD."
              width={160}
              height={64}
              className="h-10 lg:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setShowServices(true)}
                  onMouseLeave={() => setShowServices(false)}
                >
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-primary hover:bg-primary-light/50 transition-all duration-200 flex items-center gap-1"
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${showServices ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                  {showServices && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 animate-in fade-in slide-in-from-top-2">
                      {serviceLinks.map((sLink) => (
                        <Link
                          key={sLink.href}
                          href={sLink.href}
                          className="block px-4 py-2.5 text-sm text-neutral-700 hover:text-primary hover:bg-primary-light/30 transition-colors"
                        >
                          {sLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-primary hover:bg-primary-light/50 transition-all duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
            >
              ขอใบเสนอราคา
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:text-primary hover:bg-primary-light/50 transition-colors"
                >
                  {link.label}
                </Link>
                {link.hasDropdown && (
                  <div className="ml-4 space-y-1">
                    {serviceLinks.map((sLink) => (
                      <Link
                        key={sLink.href}
                        href={sLink.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 rounded-lg text-sm text-neutral-600 hover:text-primary hover:bg-primary-light/30 transition-colors"
                      >
                        {sLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors mt-3"
            >
              ขอใบเสนอราคา
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}

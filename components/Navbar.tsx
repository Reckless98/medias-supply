"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "หน้าแรก" },
  { href: "/services/forms", label: "บริการ", hasDropdown: true },
  { href: "/print-receipts", label: "สินค้า", hasDropdown: true, dropdownKey: "products" },
  { href: "/blog", label: "บทความ" },
];

const serviceLinks = [
  { href: "/services/forms", label: "งานพิมพ์คอมพิวเตอร์ฟอร์ม" },
  { href: "/services/offset", label: "งานพิมพ์ออฟเซ็ท" },
  { href: "/services/stickers", label: "งานพิมพ์สติ๊กเกอร์" },
  { href: "/services/invoice", label: "งานพิมพ์ใบเสร็จ/ใบกำกับภาษี" },
];

const productLinks = [
  { href: "/print-receipts", label: "พิมพ์ใบเสร็จรับเงิน" },
  { href: "/print-invoices", label: "พิมพ์บิล/ใบแจ้งหนี้" },
  { href: "/print-tax-invoice", label: "พิมพ์ใบกำกับภาษี" },
  { href: "/print-stickers", label: "พิมพ์สติ๊กเกอร์สินค้า" },
  { href: "/print-product-labels", label: "พิมพ์ฉลากสินค้า" },
  { href: "/print-packaging-box", label: "พิมพ์กล่องบรรจุภัณฑ์" },
  { href: "/continuous-form-printing", label: "พิมพ์กระดาษต่อเนื่อง" },
  { href: "/bill-book-printing", label: "พิมพ์บิลเล่ม" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

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
            <a href="https://line.me/R/ti/p/@p.s.mediasupply" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-[#06C755] hover:text-[#05b34c] transition-colors font-medium">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
              LINE @p.s.mediasupply
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
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                const isProducts = link.dropdownKey === "products";
                const isDropdownOpen = isProducts ? showProducts : showServices;
                const dropdownItems = isProducts ? productLinks : serviceLinks;
                return (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => isProducts ? setShowProducts(true) : setShowServices(true)}
                    onMouseLeave={() => isProducts ? setShowProducts(false) : setShowServices(false)}
                  >
                    <Link
                      href={link.href}
                      className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-primary hover:bg-primary-light/50 transition-all duration-200 flex items-center gap-1"
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
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
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-neutral-100 py-2 animate-in fade-in slide-in-from-top-2">
                        {dropdownItems.map((sLink) => (
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
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-neutral-700 hover:text-primary hover:bg-primary-light/50 transition-all duration-200"
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-sm hover:shadow-md"
            >
              ติดต่อเรา
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
            {navLinks.map((link) => {
              const dropdownItems = link.dropdownKey === "products" ? productLinks : serviceLinks;
              return (
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
                      {dropdownItems.map((sLink) => (
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
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors mt-3"
            >
              ติดต่อเรา
            </Link>
          </div>
        </div>
      )}
    </nav>
    </>
  );
}

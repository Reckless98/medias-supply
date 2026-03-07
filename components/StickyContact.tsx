"use client";

import { useState } from "react";

export default function StickyContact() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {expanded && (
        <div className="flex flex-col gap-2 animate-fade-in-up">
          <a
            href="https://line.me/R/ti/p/@p.s.mediasupply"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-[#06C755] text-white rounded-xl shadow-lg hover:brightness-110 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
            LINE
          </a>
          <a
            href="tel:0819226779"
            className="flex items-center gap-2 px-4 py-3 bg-white text-neutral-900 rounded-xl shadow-lg border border-neutral-100 hover:border-primary/30 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            081-922-6779
          </a>
          <a
            href="tel:0803406923"
            className="flex items-center gap-2 px-4 py-3 bg-white text-neutral-900 rounded-xl shadow-lg border border-neutral-100 hover:border-primary/30 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            080-340-6923
          </a>
          <a
            href="mailto:psmedia65@gmail.com"
            className="flex items-center gap-2 px-4 py-3 bg-white text-neutral-900 rounded-xl shadow-lg border border-neutral-100 hover:border-primary/30 transition-all text-sm font-medium"
          >
            <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            อีเมล
          </a>
        </div>
      )}
      <button
        onClick={() => setExpanded(!expanded)}
        aria-label="ติดต่อเรา"
        className="w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 hover:bg-primary-dark hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
      >
        {expanded ? (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}

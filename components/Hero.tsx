import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 min-h-[70vh] lg:min-h-[85vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/50 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-size-[60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary text-xs font-medium">
              บริษัท พี.เอส. มีเดียส์ ซัพพลาย จำกัด
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
              รับงานพิมพ์ครบวงจร
            </span>
            <br />
            สำหรับธุรกิจของคุณ
          </h1>

          {/* Subheadline - from brochure tagline */}
          <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-6 max-w-2xl animate-fade-in-up [animation-delay:0.2s]">
            รับออกแบบและจัดพิมพ์แบบฟอร์มต่อเนื่องบนกระดาษคอมพิวเตอร์ทุกขนาด
            งานพิมพ์ออฟเซ็ท สติ๊กเกอร์ทุกชนิด ฉลากสินค้าทุกประเภท
          </p>

          {/* Brochure tagline - golden text */}
          <p className="text-secondary font-semibold text-base sm:text-lg mb-10 animate-fade-in-up [animation-delay:0.3s]">
            งานดีมีคุณภาพ ซื่อสัตย์ ตรงต่อเวลา ราคายุติธรรม
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:0.4s]">
            <a
              href="https://line.me/R/ti/p/@p.s.mediasupply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-semibold rounded-xl hover:bg-[#05b34c] transition-all duration-300 shadow-lg shadow-[#06C755]/25 hover:shadow-xl hover:shadow-[#06C755]/30 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              แชทผ่าน LINE
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              ติดต่อเรา
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="tel:0819226779"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              โทร 081-922-6779
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-2xl animate-fade-in-up [animation-delay:0.5s]">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">20+</p>
              <p className="text-neutral-400 text-sm mt-1">ปีประสบการณ์</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">1,000+</p>
              <p className="text-neutral-400 text-sm mt-1">ลูกค้าที่ไว้วางใจ</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">4</p>
              <p className="text-neutral-400 text-sm mt-1">บริการหลัก</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white">100%</p>
              <p className="text-neutral-400 text-sm mt-1">งานคุณภาพ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

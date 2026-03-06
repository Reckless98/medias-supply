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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-neutral-900 font-semibold rounded-xl hover:bg-secondary-dark transition-all duration-300 shadow-lg"
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

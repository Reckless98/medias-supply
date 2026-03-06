import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="P.S. MEDIAS SUPPLY CO., LTD."
                width={160}
                height={64}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-4">
              บริษัท พี.เอส. มีเดียส์ ซัพพลาย จำกัด
              ผู้เชี่ยวชาญด้านงานพิมพ์ครบวงจร
              รับออกแบบและจัดพิมพ์แบบฟอร์มต่อเนื่องบนกระดาษคอมพิวเตอร์ทุกขนาด
            </p>
            <p className="text-secondary text-xs font-medium">
              งานดีมีคุณภาพ ซื่อสัตย์ ตรงต่อเวลา ราคายุติธรรม
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-secondary">
              บริการของเรา
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/forms" className="text-neutral-400 text-sm hover:text-white transition-colors">
                  งานพิมพ์คอมพิวเตอร์ฟอร์ม
                </Link>
              </li>
              <li>
                <Link href="/services/offset" className="text-neutral-400 text-sm hover:text-white transition-colors">
                  งานพิมพ์ออฟเซ็ท
                </Link>
              </li>
              <li>
                <Link href="/services/stickers" className="text-neutral-400 text-sm hover:text-white transition-colors">
                  งานพิมพ์สติ๊กเกอร์
                </Link>
              </li>
              <li>
                <Link href="/services/invoice" className="text-neutral-400 text-sm hover:text-white transition-colors">
                  งานพิมพ์ใบเสร็จ/ใบกำกับภาษี
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-secondary">
              ลิงก์ด่วน
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/" className="text-neutral-400 text-sm hover:text-white transition-colors">หน้าแรก</Link></li>
              <li><Link href="/#services" className="text-neutral-400 text-sm hover:text-white transition-colors">บริการ</Link></li>
              <li><Link href="/#portfolio" className="text-neutral-400 text-sm hover:text-white transition-colors">ผลงาน</Link></li>
              <li><Link href="/contact" className="text-neutral-400 text-sm hover:text-white transition-colors">ติดต่อเรา</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-secondary">
              ติดต่อเรา
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-neutral-400 text-sm">
                  68 ซอยงามวงศ์วาน 18 แยก 6/7<br />
                  ต.บางเขน อ.เมืองนนทบุรี<br />
                  จ.นนทบุรี 11000
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-neutral-400 text-sm">
                  <a href="tel:0819226779" className="hover:text-white transition-colors block">Tel &amp; Line: 081-922-6779</a>
                  <a href="tel:0803406923" className="hover:text-white transition-colors block">080-340-6923</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:psmedia65@gmail.com" className="text-neutral-400 text-sm hover:text-white transition-colors">
                  psmedia65@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} P.S. MEDIAS SUPPLY CO., LTD. สงวนลิขสิทธิ์
          </p>
          <p className="text-neutral-600 text-xs">
            โรงพิมพ์บริการงานพิมพ์ครบวงจร คุณภาพสูง สำหรับธุรกิจทุกประเภท
          </p>
        </div>
      </div>
    </footer>
  );
}

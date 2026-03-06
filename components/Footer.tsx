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

          {/* Products */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-secondary">
              สินค้ายอดนิยม
            </h3>
            <ul className="space-y-2.5">
              <li><Link href="/print-receipts" className="text-neutral-400 text-sm hover:text-white transition-colors">พิมพ์ใบเสร็จรับเงิน</Link></li>
              <li><Link href="/print-tax-invoice" className="text-neutral-400 text-sm hover:text-white transition-colors">พิมพ์ใบกำกับภาษี</Link></li>
              <li><Link href="/print-stickers" className="text-neutral-400 text-sm hover:text-white transition-colors">พิมพ์สติ๊กเกอร์สินค้า</Link></li>
              <li><Link href="/print-packaging-box" className="text-neutral-400 text-sm hover:text-white transition-colors">พิมพ์กล่องบรรจุภัณฑ์</Link></li>
              <li><Link href="/continuous-form-printing" className="text-neutral-400 text-sm hover:text-white transition-colors">พิมพ์กระดาษต่อเนื่อง</Link></li>
              <li><Link href="/blog" className="text-neutral-400 text-sm hover:text-white transition-colors">บทความ</Link></li>
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
                  <a href="tel:0819226779" className="hover:text-white transition-colors block">081-922-6779</a>
                  <a href="tel:0803406923" className="hover:text-white transition-colors block">080-340-6923</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-[#06C755] mt-0.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                <a href="https://line.me/R/ti/p/@psmediassupply" target="_blank" rel="noopener noreferrer" className="text-neutral-400 text-sm hover:text-[#06C755] transition-colors">
                  LINE Official
                </a>
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

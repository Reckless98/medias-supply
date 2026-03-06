import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "แบบฟอร์มธุรกิจ: ทุกอย่างที่ต้องรู้เกี่ยวกับกระดาษ NCR และงานพิมพ์ | P.S. MEDIAS SUPPLY",
  description:
    "เรียนรู้เกี่ยวกับแบบฟอร์มธุรกิจ กระดาษ NCR กระดาษต่อเนื่อง Computer Form และวิธีเลือกแบบฟอร์มที่เหมาะกับธุรกิจ",
  keywords: ["แบบฟอร์มธุรกิจ", "กระดาษ NCR", "กระดาษต่อเนื่อง", "Computer Form", "พิมพ์แบบฟอร์ม"],
  openGraph: {
    title: "แบบฟอร์มธุรกิจ: ทุกอย่างที่ต้องรู้",
    description: "คู่มือครบเครื่องเรื่องแบบฟอร์มธุรกิจและกระดาษ NCR",
    type: "article",
    locale: "th_TH",
    url: "https://psmediassupply.com/blog/how-business-forms-work",
  },
};

export default function HowBusinessFormsWork() {
  return (
    <>
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-neutral-400 text-sm hover:text-primary transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            กลับไปบทความทั้งหมด
          </Link>

          <time className="text-xs text-neutral-400">20 มีนาคม 2569</time>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            แบบฟอร์มธุรกิจ: ทุกอย่างที่ต้องรู้เกี่ยวกับกระดาษ NCR และงานพิมพ์
          </h1>
          <p className="mt-4 text-neutral-600 text-lg leading-relaxed">
            แบบฟอร์มธุรกิจเป็นหัวใจของระบบเอกสาร บทความนี้อธิบายทุกอย่างตั้งแต่ประเภทกระดาษไปจนถึงขั้นตอนการผลิต
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">กระดาษ NCR คืออะไร?</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              NCR ย่อมาจาก No Carbon Required เป็นกระดาษที่สามารถทำสำเนาได้โดยไม่ต้องใช้กระดาษคาร์บอน เมื่อเขียนหรือพิมพ์บนแผ่นบนสุด ข้อความจะปรากฏบนแผ่นล่างโดยอัตโนมัติ
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              กระดาษ NCR แบ่งเป็น 3 ชั้น:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-neutral-600 mb-4">
              <li><strong>ชั้นบนสุด (CB - Coated Back)</strong> — แผ่นต้นฉบับ เคลือบด้านหลังด้วยไมโครแคปซูล</li>
              <li><strong>ชั้นกลาง (CFB - Coated Front & Back)</strong> — แผ่นสำเนากลาง เคลือบทั้งสองด้าน</li>
              <li><strong>ชั้นล่าง (CF - Coated Front)</strong> — แผ่นสำเนาสุดท้าย เคลือบด้านหน้า</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">ประเภทของแบบฟอร์มธุรกิจ</h2>
            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">1. กระดาษต่อเนื่อง (Computer Form)</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              ใช้กับเครื่องพิมพ์ Dot Matrix มีรูเจาะสองข้างสำหรับดึงกระดาษ เหมาะสำหรับงานที่ต้องพิมพ์จำนวนมากและต่อเนื่อง เช่น ใบเสร็จรับเงิน ใบกำกับภาษี ใบจ่ายเงินเดือน
            </p>
            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">2. แบบฟอร์มเล่ม (Snap Set)</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              เข้าเล่ม 25-50 ชุด ใช้เขียนด้วยมือหรือพิมพ์ด้วยเครื่อง เหมาะสำหรับธุรกิจขนาดเล็กถึงกลาง ใช้งานง่าย พกพาสะดวก
            </p>
            <h3 className="text-lg font-semibold text-neutral-800 mt-6 mb-3">3. แบบฟอร์มแผ่น (Cut Sheet)</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              ตัดเป็นแผ่นแยก ใช้กับเครื่องพิมพ์เลเซอร์หรือเครื่องถ่ายเอกสาร เหมาะสำหรับเอกสารที่ต้องการความสวยงามและใช้ไม่บ่อย
            </p>

            <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">วิธีเลือกแบบฟอร์มให้เหมาะกับธุรกิจ</h2>
            <ol className="list-decimal pl-6 space-y-3 text-neutral-600 mb-4">
              <li><strong>จำนวนชั้นที่ต้องการ</strong> — 2 ชั้น (ต้นฉบับ + สำเนา 1), 3 ชั้น (ต้นฉบับ + สำเนา 2), 4 ชั้น (ต้นฉบับ + สำเนา 3) สำรวจว่าต้องการกี่สำเนา</li>
              <li><strong>วิธีพิมพ์</strong> — หากใช้เครื่อง Dot Matrix เลือกกระดาษต่อเนื่อง หากเขียนมือเลือกแบบเล่ม</li>
              <li><strong>ปริมาณการใช้งาน</strong> — ใช้มากเลือกกระดาษต่อเนื่อง ใช้น้อยเลือกแบบเล่ม</li>
              <li><strong>ข้อกำหนดทางกฎหมาย</strong> — ใบกำกับภาษีต้องมีรูปแบบตามกรมสรรพากร</li>
              <li><strong>สี</strong> — เลือกใช้สีต่างกันแต่ละชั้นเพื่อแยกแยะง่าย เช่น ขาว-ชมพู-เหลือง-ฟ้า</li>
            </ol>

            <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">Running Number สำคัญอย่างไร?</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Running Number หรือเลขที่รันนิ่ง คือเลขลำดับที่พิมพ์ไว้บนแบบฟอร์มทุกชุด เพื่อป้องกันการสูญหายและใช้อ้างอิงในระบบบัญชี เอกสารทางกฎหมายเช่นใบกำกับภาษีต้องมี Running Number ทุกฉบับ
            </p>

            <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">สรุป</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              การเลือกแบบฟอร์มธุรกิจที่ถูกต้องช่วยให้งานเอกสารเป็นระบบ ลดข้อผิดพลาด และถูกต้องตามกฎหมาย P.S. MEDIAS SUPPLY เป็นผู้เชี่ยวชาญด้านงานพิมพ์แบบฟอร์มมากว่า 20 ปี สามารถปรึกษาและออกแบบแบบฟอร์มได้ฟรี โทร 081-922-6779
            </p>
          </div>

          {/* Related links */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h3 className="font-bold text-neutral-900 mb-4">บทความที่เกี่ยวข้อง</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/how-to-print-receipt-books" className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
                วิธีเลือกพิมพ์ใบเสร็จรับเงิน
              </Link>
              <Link href="/blog/difference-between-invoice-and-tax-invoice" className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
                ใบแจ้งหนี้ vs ใบกำกับภาษี
              </Link>
              <Link href="/blog/best-sticker-printing-for-products" className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
                เลือกสติ๊กเกอร์สินค้าอย่างไร
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary-light/30 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">ต้องการพิมพ์แบบฟอร์มธุรกิจ?</h3>
            <p className="text-neutral-600 text-sm mb-4">ออกแบบฟรี ผลิตไว ราคาโรงงาน</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/business-form-printing" className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm">
                ดูบริการพิมพ์แบบฟอร์มธุรกิจ
              </Link>
              <Link href="/continuous-form-printing" className="px-6 py-3 bg-secondary text-neutral-900 font-semibold rounded-xl hover:bg-secondary-dark transition-colors text-sm">
                ดูบริการพิมพ์กระดาษต่อเนื่อง
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

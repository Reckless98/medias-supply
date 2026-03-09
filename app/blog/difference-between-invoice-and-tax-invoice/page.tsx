import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ความแตกต่างระหว่างใบแจ้งหนี้ (Invoice) กับใบกำกับภาษี (Tax Invoice)",
  description:
    "อธิบายความแตกต่างของใบแจ้งหนี้ Invoice กับใบกำกับภาษี Tax Invoice เมื่อไหร่ต้องใช้อะไร ข้อกำหนดตามกฎหมายภาษี และวิธีเลือกพิมพ์ให้ถูกต้อง",
  keywords: ["ใบแจ้งหนี้", "ใบกำกับภาษี", "Invoice", "Tax Invoice", "ความแตกต่าง"],
  openGraph: {
    title: "ความแตกต่างระหว่างใบแจ้งหนี้ กับใบกำกับภาษี",
    description: "อธิบายความแตกต่างของ Invoice กับ Tax Invoice อย่างละเอียด",
    type: "article",
    locale: "th_TH",
    url: "https://psmediassupply.com/blog/difference-between-invoice-and-tax-invoice",
  },
  alternates: {
    canonical: "https://psmediassupply.com/blog/difference-between-invoice-and-tax-invoice",
  },
};

export default function DifferenceBetweenInvoiceAndTaxInvoice() {
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

          <time className="text-xs text-neutral-400">25 กุมภาพันธ์ 2569</time>
          <h1 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
            ความแตกต่างระหว่างใบแจ้งหนี้ (Invoice) กับใบกำกับภาษี (Tax Invoice)
          </h1>
          <p className="mt-4 text-neutral-600 text-lg leading-relaxed">
            หลายคนสับสนระหว่างใบแจ้งหนี้กับใบกำกับภาษี บทความนี้จะอธิบายความแตกต่างอย่างชัดเจน
          </p>

          <div className="mt-10">
            <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">ใบแจ้งหนี้ (Invoice) คืออะไร?</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              ใบแจ้งหนี้ หรือ Invoice เป็นเอกสารที่ผู้ขายออกให้ผู้ซื้อเพื่อแจ้งรายละเอียดสินค้าหรือบริการที่ส่งมอบ พร้อมราคาและเงื่อนไขการชำระเงิน เป็นเอกสารเรียกเก็บเงินทั่วไปที่ไม่มีผลทางภาษีมูลค่าเพิ่ม
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              ใบแจ้งหนี้จะระบุข้อมูลสำคัญ ได้แก่ ชื่อผู้ขาย ชื่อผู้ซื้อ รายการสินค้าหรือบริการ จำนวน ราคาต่อหน่วย ราคารวม เงื่อนไขการชำระเงิน และวันครบกำหนดชำระ
            </p>

            <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">ใบกำกับภาษี (Tax Invoice) คืออะไร?</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              ใบกำกับภาษี เป็นเอกสารที่ผู้จดทะเบียนภาษีมูลค่าเพิ่ม (VAT) ต้องออกให้ผู้ซื้อทุกครั้งที่มีการขายสินค้าหรือบริการ เป็นเอกสารที่มีผลทางกฎหมาย ต้องมีรายละเอียดครบถ้วนตามที่กรมสรรพากรกำหนด
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              ใบกำกับภาษีต้องมี: ชื่อ ที่อยู่ เลขประจำตัวผู้เสียภาษีของผู้ออก, ชื่อ ที่อยู่ เลขประจำตัวผู้เสียภาษีของผู้ซื้อ, วันเดือนปีที่ออก, หมายเลขลำดับ, รายการสินค้า/บริการ, จำนวนภาษีมูลค่าเพิ่ม
            </p>

            <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">ตารางเปรียบเทียบ</h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-neutral-200 rounded-lg overflow-hidden text-sm">
                <thead>
                  <tr className="bg-neutral-50">
                    <th className="text-left px-4 py-3 font-semibold text-neutral-900 border-b">หัวข้อ</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-900 border-b">ใบแจ้งหนี้ (Invoice)</th>
                    <th className="text-left px-4 py-3 font-semibold text-neutral-900 border-b">ใบกำกับภาษี (Tax Invoice)</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-600">
                  <tr className="border-b border-neutral-100">
                    <td className="px-4 py-3 font-medium">วัตถุประสงค์</td>
                    <td className="px-4 py-3">เรียกเก็บเงิน</td>
                    <td className="px-4 py-3">แสดงภาษีมูลค่าเพิ่ม</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="px-4 py-3 font-medium">ผู้ออก</td>
                    <td className="px-4 py-3">ใครก็ได้</td>
                    <td className="px-4 py-3">ผู้จดทะเบียน VAT เท่านั้น</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="px-4 py-3 font-medium">แสดง VAT</td>
                    <td className="px-4 py-3">ไม่จำเป็น</td>
                    <td className="px-4 py-3">ต้องแสดง</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="px-4 py-3 font-medium">ใช้ขอคืนภาษีได้</td>
                    <td className="px-4 py-3">ไม่ได้</td>
                    <td className="px-4 py-3">ได้</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">ข้อกำหนด</td>
                    <td className="px-4 py-3">ไม่มีรูปแบบบังคับ</td>
                    <td className="px-4 py-3">ตามกรมสรรพากร</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">เมื่อไหร่ต้องใช้อะไร?</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              หากธุรกิจของคุณจดทะเบียน VAT คุณ<strong>ต้อง</strong>ออกใบกำกับภาษีทุกครั้งที่มีการขาย แต่ยังสามารถออกใบแจ้งหนี้ควบคู่ไปด้วยได้ หากไม่ได้จดทะเบียน VAT ก็ใช้ใบแจ้งหนี้ธรรมดาได้
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              หลายธุรกิจเลือกพิมพ์แบบฟอร์ม &quot;ใบกำกับภาษี/ใบเสร็จรับเงิน&quot; รวมในใบเดียวกัน เพื่อความสะดวกและประหยัดกระดาษ
            </p>

            <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4">สรุป</h2>
            <p className="text-neutral-600 leading-relaxed mb-4">
              ใบแจ้งหนี้ใช้เรียกเก็บเงินทั่วไป ส่วนใบกำกับภาษีเป็นเอกสารทางกฎหมายที่ต้องมีรูปแบบตามกรมสรรพากร หากไม่แน่ใจว่าธุรกิจคุณต้องใช้แบบไหน สามารถปรึกษา P.S. MEDIAS SUPPLY ได้ที่ 081-922-6779
            </p>
          </div>

          {/* Related links */}
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h3 className="font-bold text-neutral-900 mb-4">บทความที่เกี่ยวข้อง</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/blog/how-to-print-receipt-books" className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
                วิธีเลือกพิมพ์ใบเสร็จรับเงิน
              </Link>
              <Link href="/blog/how-business-forms-work" className="px-4 py-2 bg-neutral-100 text-neutral-700 text-sm rounded-lg hover:bg-primary hover:text-white transition-colors">
                แบบฟอร์มธุรกิจ: ทุกอย่างที่ต้องรู้
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 bg-primary-light/30 rounded-2xl border border-primary/10 text-center">
            <h3 className="text-xl font-bold text-neutral-900 mb-2">ต้องการพิมพ์ใบกำกับภาษี?</h3>
            <p className="text-neutral-600 text-sm mb-4">ถูกต้องตามกรมสรรพากร ออกแบบฟรี</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/print-tax-invoice" className="px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm">
                ดูบริการพิมพ์ใบกำกับภาษี
              </Link>
              <a href="tel:0819226779" className="px-6 py-3 bg-secondary text-neutral-900 font-semibold rounded-xl hover:bg-secondary-dark transition-colors text-sm">
                โทร 081-922-6779
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

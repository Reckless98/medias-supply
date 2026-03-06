import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "แบบฟอร์มธุรกิจ | อินวอยซ์ ใบเสร็จ ใบกำกับภาษี ใบจ่ายเงินเดือน",
  description:
    "รับพิมพ์แบบฟอร์มธุรกิจครบวงจร อินวอยซ์ ใบเสร็จรับเงิน ใบกำกับภาษี ใบส่งของ ใบแจ้งหนี้ ใบจ่ายเงินเดือนพนักงาน หนังสือรับรองการหักภาษี ณ ที่จ่าย โทร 081-922-6779",
};

const documentTypes = [
  {
    title: "อินวอยซ์ (Invoice)",
    description:
      "พิมพ์อินวอยซ์สำหรับธุรกิจส่งออกและธุรกิจทั่วไป ออกแบบตามรูปแบบของบริษัท",
    features: [
      "พิมพ์หลายสำเนา (2-6 ชั้น)",
      "หมายเลขกำกับ Running Number",
      "กระดาษเคมี NCR คุณภาพสูง",
      "ออกแบบตามรูปแบบของบริษัท",
    ],
  },
  {
    title: "ใบเสร็จรับเงิน / ใบกำกับภาษี",
    description:
      "ใบเสร็จรับเงินและใบกำกับภาษีที่ถูกต้องตามข้อกำหนดของกรมสรรพากร พิมพ์คมชัด ข้อมูลครบถ้วน",
    features: [
      "ถูกต้องตามกฎหมาย",
      "รูปแบบตามข้อกำหนดสรรพากร",
      "พิมพ์สีเดียวหรือหลายสี",
      "กระดาษคาร์บอน NCR ติดชัดทุกใบ",
    ],
  },
  {
    title: "ใบส่งของ / ใบแจ้งหนี้ / ใบวางบิล",
    description:
      "เอกสารจัดส่งสินค้าและเรียกเก็บเงิน ออกแบบเฉพาะตามความต้องการของธุรกิจ",
    features: [
      "ออกแบบตามความต้องการ",
      "พิมพ์ได้ทุกจำนวน",
      "เลือกขนาดได้ตามต้องการ",
      "จัดส่งรวดเร็ว ตรงเวลา",
    ],
  },
  {
    title: "ใบลดหนี้ / ใบเพิ่มหนี้ / ใบสั่งซ่อมรถ / ใบรับรถ",
    description:
      "เอกสารทางบัญชีและเอกสารเฉพาะทาง สำหรับธุรกิจรถยนต์ อู่ซ่อมรถ และธุรกิจทั่วไป",
    features: [
      "พิมพ์ตามรูปแบบมาตรฐาน",
      "ปรับแต่งได้ตามต้องการ",
      "กระดาษเคมีหลายชั้น",
      "หมายเลขกำกับ Running Number",
    ],
  },
  {
    title: "ใบจ่ายเงินเดือนพนักงาน (ซองลับเฉพาะ)",
    description:
      "สลิปเงินเดือนแบบซองลับเฉพาะ ปิดผนึกเรียบร้อย รักษาความลับของพนักงาน",
    features: [
      "ซองลับเฉพาะ ปิดผนึกเรียบร้อย",
      "พิมพ์รายละเอียดครบถ้วน",
      "เหมาะกับระบบ Payroll",
      "กระดาษต่อเนื่องหรือแผ่นเดี่ยว",
    ],
  },
  {
    title: "หนังสือรับรองการหักภาษี ณ ที่จ่าย / 50 ทวิ",
    description:
      "แบบฟอร์มหนังสือรับรองการหักภาษี ณ ที่จ่าย ถูกต้องตามแบบของกรมสรรพากร",
    features: [
      "ถูกต้องตามแบบกรมสรรพากร",
      "พิมพ์หลายสำเนา",
      "กระดาษเคมี NCR คุณภาพดี",
      "ราคาประหยัด",
    ],
  },
];

export default function InvoicePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linear-to-br from-neutral-900 to-neutral-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1 text-neutral-400 text-sm hover:text-white transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              กลับหน้าแรก
            </Link>
            <span className="text-primary text-sm font-semibold">บริการ</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              แบบฟอร์มธุรกิจ
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              รับพิมพ์แบบฟอร์มธุรกิจครบวงจร อินวอยซ์ ใบเสร็จ ใบกำกับภาษี ใบส่งของ
              ใบจ่ายเงินเดือน หนังสือรับรองการหักภาษี ถูกต้องตามมาตรฐาน คุณภาพสูง
            </p>
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-8">
            ประเภทเอกสาร
          </h2>
          <div className="space-y-6">
            {documentTypes.map((doc, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {doc.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {doc.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-center gap-2 text-sm text-neutral-600 bg-neutral-50 rounded-lg p-3"
                        >
                          <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            สนใจแบบฟอร์มธุรกิจ?
          </h2>
          <p className="text-white/80 mb-8">
            ติดต่อเราเพื่อขอใบเสนอราคา เราพร้อมให้คำปรึกษาฟรี
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-neutral-50 transition-colors shadow-lg"
          >
            ขอใบเสนอราคา
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "แบบฟอร์มธุรกิจ | อินวอยซ์ ใบเสร็จ ใบกำกับภาษี ใบจ่ายเงินเดือน",
  description:
    "รับพิมพ์แบบฟอร์มธุรกิจครบวงจร อินวอยซ์ ใบเสร็จรับเงิน ใบกำกับภาษี ใบส่งของ ใบแจ้งหนี้ ใบจ่ายเงินเดือนพนักงาน หนังสือรับรองการหักภาษี ณ ที่จ่าย โทร 081-922-6779",
};

const documentIcons = [
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
  "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
];

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
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-8">
              ประเภทเอกสาร
            </h2>
          </AnimateOnScroll>
          <div className="space-y-6">
            {documentTypes.map((doc, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 80}>
                <div className="bg-white border border-neutral-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={documentIcons[index % documentIcons.length]} />
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
              </AnimateOnScroll>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-neutral-50 transition-colors shadow-lg"
            >
              ขอใบเสนอราคา
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://line.me/R/ti/p/@psmediassupply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#06C755] text-white font-semibold rounded-xl hover:brightness-110 transition-all shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
              แชทผ่าน LINE
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

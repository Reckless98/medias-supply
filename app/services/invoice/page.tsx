import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FloatingParticles from "@/components/FloatingParticles";

export const metadata: Metadata = {
  title: "แบบฟอร์มธุรกิจ | อินวอยซ์ ใบเสร็จ ใบกำกับภาษี ใบจ่ายเงินเดือน",
  description:
    "รับพิมพ์แบบฟอร์มธุรกิจครบวงจร อินวอยซ์ ใบเสร็จรับเงิน ใบกำกับภาษี ใบส่งของ ใบแจ้งหนี้ ใบจ่ายเงินเดือนพนักงาน หนังสือรับรองการหักภาษี ณ ที่จ่าย โทร 081-922-6779",
  keywords: ["แบบฟอร์มธุรกิจ", "พิมพ์อินวอยซ์", "พิมพ์ใบเสร็จ", "ใบกำกับภาษี", "ใบส่งของ", "ใบแจ้งหนี้", "ใบจ่ายเงินเดือน"],
  openGraph: {
    title: "แบบฟอร์มธุรกิจ | P.S. MEDIAS SUPPLY",
    description: "รับพิมพ์แบบฟอร์มธุรกิจครบวงจร อินวอยซ์ ใบเสร็จ ใบกำกับภาษี ใบส่งของ โทร 081-922-6779",
    type: "website",
    locale: "th_TH",
    url: "https://psmediassupply.com/services/invoice",
  },
  alternates: {
    canonical: "https://psmediassupply.com/services/invoice",
  },
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
      <section className="relative overflow-hidden bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <FloatingParticles variant="dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-xs font-medium">แบบฟอร์มธุรกิจ</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              แบบฟอร์มธุรกิจครบวงจร
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed max-w-2xl">
              รับพิมพ์เอกสารธุรกิจทุกประเภท อินวอยซ์ ใบเสร็จ ใบกำกับภาษี ใบส่งของ
              ใบจ่ายเงินเดือน หนังสือรับรองหักภาษี ถูกต้องตามมาตรฐานราชการ
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["ถูกต้องตามกฎหมาย", "NCR คุณภาพสูง", "Running Number", "ออกแบบฟรี"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Types - Alternating Cards */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">ประเภทเอกสาร</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-neutral-900">
                เอกสารธุรกิจที่เราให้บริการ
              </h2>
              <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
                ครอบคลุมเอกสารทุกประเภทที่ธุรกิจของคุณต้องการ พิมพ์คมชัด ถูกต้องตามกฎหมาย
              </p>
            </div>
          </AnimateOnScroll>
          <div className="space-y-8">
            {documentTypes.map((doc, index) => (
              <AnimateOnScroll key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 60}>
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300`}>
                  {/* Visual Side */}
                  <div className="lg:w-2/5 bg-linear-to-br from-primary/5 to-secondary/5 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center shrink-0">
                        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={documentIcons[index % documentIcons.length]} />
                        </svg>
                      </div>
                      <span className="text-5xl font-black text-primary/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-neutral-900 mb-3">
                      {doc.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                  {/* Features Side */}
                  <div className="lg:w-3/5 p-6 lg:p-10 flex items-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                      {doc.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-start gap-3 bg-neutral-50 rounded-xl p-4 border border-neutral-100"
                        >
                          <div className="w-6 h-6 bg-primary-light rounded-md flex items-center justify-center shrink-0 mt-0.5">
                            <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Forms */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">ข้อดี</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-neutral-900">
                ทำไมต้องพิมพ์แบบฟอร์มกับเรา?
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "ถูกต้องตามกฎหมาย", desc: "ออกแบบตามข้อกำหนดของกรมสรรพากร ผ่านมาตรฐานตรวจสอบ", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { title: "พิมพ์หลายสำเนา NCR", desc: "กระดาษเคมี NCR คุณภาพสูง ติดชัดทุกใบ ตั้งแต่ 2-7 ชั้น", icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" },
              { title: "ออกแบบตามความต้องการ", desc: "ทีมออกแบบจัดทำแบบฟอร์มเฉพาะสำหรับธุรกิจของคุณ", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
              { title: "Running Number", desc: "หมายเลขกำกับเรียงลำดับต่อเนื่อง ป้องกันการปลอมแปลง", icon: "M7 20l4-16m2 16l4-16M6 9h14M4 15h14" },
              { title: "คุณภาพการพิมพ์สูง", desc: "พิมพ์คมชัดทุกรายละเอียด สีไม่ซีดจาง ทนทานต่อการใช้งาน", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
              { title: "ส่งมอบตรงเวลา", desc: "กำหนดส่งชัดเจน ส่งมอบตรงเวลา จัดส่งฟรีในเขต กทม.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 80}>
                <div className="bg-white rounded-2xl border border-neutral-100 p-6 shadow-sm h-full hover:shadow-md hover:border-primary/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              สนใจแบบฟอร์มธุรกิจ?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              ติดต่อเราได้เลย เราพร้อมให้คำปรึกษาและออกแบบแบบฟอร์มเฉพาะสำหรับธุรกิจของคุณ
            </p>
          </AnimateOnScroll>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-neutral-50 transition-colors shadow-lg"
            >
              ติดต่อเรา
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="https://line.me/R/ti/p/@p.s.mediasupply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-semibold rounded-xl hover:brightness-110 transition-all shadow-lg"
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

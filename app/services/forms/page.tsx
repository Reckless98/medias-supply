import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "งานพิมพ์คอมพิวเตอร์ฟอร์ม | กระดาษต่อเนื่อง กระดาษเคมี",
  description:
    "บริการรับพิมพ์กระดาษต่อเนื่องคอมพิวเตอร์ทุกชนิด ใบเสร็จรับเงิน ใบกำกับภาษี ใบวางบิล กระดาษเคมีเปล่า กระดาษต่อเนื่อง 9x11 คุณภาพสูง ส่งมอบตรงเวลา โทร 081-922-6779",
};

const formTypes = [
  {
    title: "ใบเสร็จรับเงิน",
    description:
      "พิมพ์ใบเสร็จรับเงินแบบต่อเนื่อง หลายสำเนา สีชัดเจน อ่านง่าย",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "ใบกำกับภาษี",
    description:
      "ใบกำกับภาษีที่ถูกต้องตามกฎหมาย พิมพ์คมชัด ข้อมูลครบถ้วน",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "ใบวางบิล",
    description: "ใบวางบิลสำหรับธุรกิจ ออกแบบเฉพาะ พิมพ์ตามจำนวนที่ต้องการ",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
  },
  {
    title: "กระดาษต่อเนื่อง",
    description: "กระดาษต่อเนื่องขนาด 9\" x 11\" สำหรับเครื่องพิมพ์ดอทเมทริกซ์ มี 1-4 ชั้น",
    icon: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z",
  },
  {
    title: "กระดาษเคมีเปล่า",
    description: "กระดาษเคมีต่างสี (Carbonless) คุณภาพดี เกรด A มี 2-7 ชั้น ติดชัดทุกใบ",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
];

const features = [
  "พิมพ์ได้หลายสำเนา (2-7 ชั้น)",
  "เลือกขนาดกระดาษได้ตามต้องการ",
  "กระดาษต่อเนื่อง 9\" x 11\" (1-4 ชั้น)",
  "กระดาษเคมีเปล่า 2-7 ชั้น",
  "ใช้กระดาษเกรด A ติดชัดทุกใบ",
  "กระดาษเคมีต่างสี (Carbonless) คุณภาพดี",
  "พิมพ์สีเดียวหรือหลายสี",
  "ออกแบบฟอร์มตามความต้องการ",
  "จัดส่งฟรีในเขตกรุงเทพฯ และปริมณฑล",
];

export default function FormsPage() {
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
              งานพิมพ์คอมพิวเตอร์ฟอร์ม
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              บริการพิมพ์แบบฟอร์มสำเร็จรูปด้วยระบบคอมพิวเตอร์ฟอร์ม
              คุณภาพสูง ตรงเวลา สำหรับธุรกิจทุกประเภท
            </p>
          </div>
        </div>
      </section>

      {/* Form Types */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-8">
              ประเภทงานพิมพ์
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formTypes.map((form, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 80}>
                <div className="bg-white border border-neutral-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={form.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{form.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{form.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-8">
              คุณสมบัติ
            </h2>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <AnimateOnScroll key={index} animation="scale-in" delay={index * 50}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-700">{feature}</span>
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
            สนใจงานพิมพ์คอมพิวเตอร์ฟอร์ม?
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

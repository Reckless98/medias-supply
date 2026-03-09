import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FloatingParticles from "@/components/FloatingParticles";

export const metadata: Metadata = {
  title: "งานพิมพ์คอมพิวเตอร์ฟอร์ม | กระดาษต่อเนื่อง กระดาษเคมี",
  description:
    "บริการรับพิมพ์กระดาษต่อเนื่องคอมพิวเตอร์ทุกชนิด ใบเสร็จรับเงิน ใบกำกับภาษี ใบวางบิล กระดาษเคมีเปล่า กระดาษต่อเนื่อง 9x11 คุณภาพสูง ส่งมอบตรงเวลา โทร 081-922-6779",
  keywords: ["คอมพิวเตอร์ฟอร์ม", "กระดาษต่อเนื่อง", "กระดาษเคมี", "พิมพ์ใบเสร็จ", "พิมพ์ใบกำกับภาษี", "พิมพ์ใบวางบิล", "กระดาษ 9x11"],
  openGraph: {
    title: "งานพิมพ์คอมพิวเตอร์ฟอร์ม | P.S. MEDIAS SUPPLY",
    description: "รับพิมพ์กระดาษต่อเนื่องคอมพิวเตอร์ทุกชนิด ใบเสร็จ ใบกำกับภาษี ใบวางบิล คุณภาพสูง โทร 081-922-6779",
    type: "website",
    locale: "th_TH",
    url: "https://psmediassupply.com/services/forms",
  },
  alternates: {
    canonical: "https://psmediassupply.com/services/forms",
  },
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
              <span className="text-primary text-xs font-medium">บริการงานพิมพ์</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              งานพิมพ์คอมพิวเตอร์ฟอร์ม
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed max-w-2xl">
              บริการพิมพ์แบบฟอร์มต่อเนื่องครบวงจร ด้วยระบบคอมพิวเตอร์ฟอร์มที่ทันสมัย
              คุณภาพคมชัด หลายสำเนา สำหรับธุรกิจทุกประเภท ด้วยประสบการณ์กว่า 30 ปี
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["หลายสำเนา", "Running Number", "กระดาษเคมี NCR", "จัดส่งฟรี กทม."].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">รายละเอียดบริการ</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-neutral-900">
                งานพิมพ์คอมพิวเตอร์ฟอร์มคืออะไร?
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                คอมพิวเตอร์ฟอร์ม คือกระดาษต่อเนื่องที่ออกแบบมาเพื่อใช้กับเครื่องพิมพ์ดอทเมทริกซ์
                มีรูเจาะข้างทั้งสองฝั่งเพื่อลากกระดาษอัตโนมัติ สามารถพิมพ์ได้หลายสำเนาพร้อมกัน
                เหมาะสำหรับเอกสารธุรกิจเช่น ใบเสร็จรับเงิน ใบกำกับภาษี ใบส่งของ และเอกสารทางบัญชีต่างๆ
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Form Types - Alternating Layout */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">ประเภทงานพิมพ์</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-neutral-900">
                เราพิมพ์อะไรได้บ้าง?
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="space-y-8">
            {formTypes.map((form, index) => (
              <AnimateOnScroll key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 60}>
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300`}>
                  {/* Icon/Visual Side */}
                  <div className="lg:w-1/3 bg-linear-to-br from-primary/5 to-secondary/5 flex items-center justify-center p-8 lg:p-12">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={form.icon} />
                      </svg>
                    </div>
                  </div>
                  {/* Content Side */}
                  <div className="lg:w-2/3 p-6 lg:p-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-primary-light rounded-lg flex items-center justify-center text-primary text-sm font-bold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-bold text-neutral-900">{form.title}</h3>
                    </div>
                    <p className="text-neutral-600 leading-relaxed text-base">{form.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process / How We Work */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">ขั้นตอนการทำงาน</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-neutral-900">
                ขั้นตอนการสั่งพิมพ์
              </h2>
              <p className="mt-3 text-neutral-600">ง่ายๆ เพียง 4 ขั้นตอน</p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "ปรึกษาและเสนอราคา", desc: "แจ้งความต้องการ ขนาด จำนวน เราออกใบเสนอราคาฟรี", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
              { step: "02", title: "ออกแบบฟอร์ม", desc: "ทีมออกแบบจัดทำแบบตามความต้องการ ส่งให้ตรวจสอบก่อนพิมพ์", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
              { step: "03", title: "พิมพ์งาน", desc: "พิมพ์ด้วยเครื่องจักรคุณภาพสูง ตรวจสอบคุณภาพทุกขั้นตอน", icon: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" },
              { step: "04", title: "จัดส่งงาน", desc: "จัดส่งรวดเร็ว ตรงเวลา ฟรีในเขตกรุงเทพฯ และปริมณฑล", icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" },
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="relative bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm h-full group hover:border-primary/20 hover:shadow-md transition-all duration-300">
                  <div className="text-5xl font-black text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                    {item.step}
                  </div>
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

      {/* Features / Specs */}
      <section className="py-16 lg:py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold tracking-wide uppercase">คุณสมบัติ</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-bold">
                จุดเด่นของงานพิมพ์คอมพิวเตอร์ฟอร์ม
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <AnimateOnScroll key={index} animation="scale-in" delay={index * 40}>
                <div className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-neutral-200">{feature}</span>
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
              สนใจงานพิมพ์คอมพิวเตอร์ฟอร์ม?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              ติดต่อเราได้เลย เราพร้อมให้คำปรึกษาและเสนอราคาฟรี ไม่มีค่าใช้จ่าย
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

import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FloatingParticles from "@/components/FloatingParticles";

export const metadata: Metadata = {
  title: "งานพิมพ์ออฟเซ็ท | หนังสือ โบรชัวร์ กล่องบรรจุภัณฑ์ เคลือบลามิเนต",
  description:
    "บริการรับพิมพ์งานระบบออฟเซ็ททุกชนิด หนังสือ โบรชัวร์ สมุด ถุงกระดาษ กล่องบรรจุภัณฑ์ พร้อมเคลือบเงายูวี เคลือบลามิเนต งานเจาะ งานไดคัท โทร 081-922-6779",
  keywords: ["พิมพ์ออฟเซ็ท", "โรงพิมพ์ออฟเซ็ท", "พิมพ์หนังสือ", "พิมพ์โบรชัวร์", "พิมพ์กล่องบรรจุภัณฑ์", "เคลือบลามิเนต", "งานไดคัท"],
  openGraph: {
    title: "งานพิมพ์ออฟเซ็ท | P.S. MEDIAS SUPPLY",
    description: "รับพิมพ์งานออฟเซ็ท หนังสือ โบรชัวร์ กล่อง ถุงกระดาษ เคลือบลามิเนต โทร 081-922-6779",
    type: "website",
    locale: "th_TH",
    url: "https://psmediassupply.com/services/offset",
  },
  alternates: {
    canonical: "https://psmediassupply.com/services/offset",
  },
};

const products = [
  {
    title: "หนังสือ",
    description: "พิมพ์หนังสือทุกประเภท ตั้งแต่ปกอ่อนถึงปกแข็ง เข้าเล่มหลากหลายรูปแบบ",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "โบรชัวร์",
    description: "โบรชัวร์สีสันสดใส พับได้หลายแบบ เหมาะสำหรับโฆษณาสินค้าและบริการ",
    icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  },
  {
    title: "สมุด",
    description: "สมุดจดบันทึก สมุดโน้ต สำหรับองค์กร สามารถออกแบบปกได้ตามต้องการ",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  },
  {
    title: "ถุงกระดาษ",
    description: "ถุงกระดาษคุณภาพดี พิมพ์ลายเฉพาะ เหมาะกับร้านค้าและแบรนด์ต่างๆ",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  },
  {
    title: "กล่องบรรจุภัณฑ์",
    description: "กล่องบรรจุภัณฑ์สวยงาม แข็งแรง ออกแบบเฉพาะสำหรับสินค้าของคุณ",
    icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  },
];

const additionalServices = [
  { text: "เคลือบเงายูวี / เคลือบลามิเนต (ด้าน/มัน)", icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" },
  { text: "ไดคัท ตามรูปแบบที่ต้องการ", icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" },
  { text: "งานเจาะ / งานเจาะเว้นช่องหน้าต่าง", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" },
  { text: "ปั๊มนูน / ปั๊มฟอยล์", icon: "M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" },
  { text: "เข้าเล่ม (ไสกาว, เย็บมุง, สันห่วง)", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { text: "งานปั๊มตัด (Die Cut) ทุกรูปแบบ", icon: "M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" },
];

export default function OffsetPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-20 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-secondary text-xs font-medium">ออฟเซ็ทพรินท์</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              งานพิมพ์ออฟเซ็ทคุณภาพสูง
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed max-w-2xl">
              ระบบพิมพ์ออฟเซ็ทให้สีสันสดใส คมชัดทุกรายละเอียด เหมาะสำหรับงานปริมาณมาก
              ครอบคลุมหนังสือ โบรชัวร์ สมุด ถุงกระดาษ และกล่องบรรจุภัณฑ์
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["สีสันคมชัด", "ปริมาณมาก", "ราคาคุ้มค่า", "ส่งตรงเวลา"].map((tag) => (
                <span key={tag} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-xs font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">ทำไมต้องออฟเซ็ท?</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-neutral-900">
                ระบบพิมพ์ออฟเซ็ทคืออะไร?
              </h2>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                ออฟเซ็ทเป็นระบบการพิมพ์ที่ให้คุณภาพสูงที่สุดในระดับอุตสาหกรรม
                เหมาะสำหรับงานพิมพ์จำนวนมากที่ต้องการความคมชัด สีสม่ำเสมอ
                และคุณภาพสูงในทุกๆ แผ่น ทีมงานมืออาชีพของเราดูแลทุกขั้นตอน
                ตั้งแต่การออกแบบ ทำเพลท พิมพ์ ไปจนถึงขั้นตอนหลังพิมพ์
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Products - Alternating Cards */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">ผลิตภัณฑ์</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-neutral-900">
                สิ่งพิมพ์ออฟเซ็ทของเรา
              </h2>
              <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">
                เราพิมพ์สิ่งพิมพ์ออฟเซ็ทหลากหลายประเภท ตอบโจทย์ทุกความต้องการของธุรกิจ
              </p>
            </div>
          </AnimateOnScroll>
          <div className="space-y-8">
            {products.map((product, index) => (
              <AnimateOnScroll key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 60}>
                <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} bg-white rounded-2xl border border-neutral-100 shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300`}>
                  {/* Visual Side */}
                  <div className="lg:w-2/5 bg-linear-to-br from-primary/5 to-secondary/5 p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-white rounded-2xl shadow-md flex items-center justify-center shrink-0">
                        <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.icon} />
                        </svg>
                      </div>
                      <span className="text-5xl font-black text-primary/10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-xl lg:text-2xl font-bold text-neutral-900">
                      {product.title}
                    </h3>
                  </div>
                  {/* Description Side */}
                  <div className="lg:w-3/5 p-8 lg:p-10 flex items-center">
                    <div>
                      <p className="text-neutral-600 leading-relaxed text-lg mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-medium">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        พิมพ์ออฟเซ็ทคุณภาพสูง สีสันคมชัด
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-secondary text-sm font-semibold tracking-wide uppercase">งานหลังพิมพ์</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-bold">
                บริการตกแต่งหลังพิมพ์
              </h2>
              <p className="mt-3 text-neutral-400 max-w-2xl mx-auto">
                เพิ่มมูลค่าให้สิ่งพิมพ์ด้วยบริการเสริมหลากหลาย ทำให้งานของคุณโดดเด่นและสมบูรณ์แบบ
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 80}>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-secondary/30 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </div>
                  <p className="text-neutral-200 font-medium">{service.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">ขั้นตอนการทำงาน</span>
              <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-neutral-900">
                กระบวนการพิมพ์ของเรา
              </h2>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "ปรึกษา", desc: "หารือความต้องการ ขนาด จำนวน กระดาษ และรายละเอียดงาน", icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" },
              { step: "02", title: "ออกแบบ", desc: "ทีมออกแบบจัดทำอาร์ตเวิร์คให้ตรวจสอบก่อนพิมพ์", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
              { step: "03", title: "พิมพ์", desc: "พิมพ์ด้วยเครื่องออฟเซ็ทคุณภาพสูง ตรวจสอบสีทุกขั้นตอน", icon: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" },
              { step: "04", title: "จัดส่ง", desc: "ตรวจสอบคุณภาพก่อนส่ง บรรจุอย่างดี จัดส่งรวดเร็ว", icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" },
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="fade-up" delay={index * 100}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                    </svg>
                  </div>
                  <span className="text-xs font-bold text-primary/40">{item.step}</span>
                  <h3 className="text-lg font-bold text-neutral-900 mt-1 mb-2">{item.title}</h3>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">สนใจงานพิมพ์ออฟเซ็ท?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              ติดต่อเราได้เลย เราพร้อมให้คำปรึกษาและออกแบบสิ่งพิมพ์เฉพาะสำหรับธุรกิจของคุณ
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

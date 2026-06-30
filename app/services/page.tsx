import type { Metadata } from "next";
import Link from "next/link";
import FloatingParticles from "@/components/FloatingParticles";

export const metadata: Metadata = {
  title: "บริการของเรา | งานพิมพ์ครบวงจร",
  description:
    "บริการงานพิมพ์ครบวงจร คอมพิวเตอร์ฟอร์ม ออฟเซ็ท สติ๊กเกอร์ แบบฟอร์มธุรกิจ ด้วยคุณภาพสูงและราคายุติธรรม",
  openGraph: {
    title: "บริการของเรา | P.S. MEDIAS SUPPLY",
    description: "บริการงานพิมพ์ครบวงจร คอมพิวเตอร์ฟอร์ม ออฟเซ็ท สติ๊กเกอร์ แบบฟอร์มธุรกิจ",
    type: "website",
    locale: "th_TH",
    url: "https://psmediassupply.com/services",
  },
  alternates: {
    canonical: "https://psmediassupply.com/services",
  },
};

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "งานพิมพ์คอมพิวเตอร์ฟอร์ม",
    description:
      "รับพิมพ์กระดาษต่อเนื่องคอมพิวเตอร์ทุกชนิด ใบเสร็จรับเงิน ใบกำกับภาษี ใบวางบิล กระดาษเคมี NCR คุณภาพสูง ตรงเวลา",
    items: ["ใบเสร็จรับเงิน", "ใบกำกับภาษี", "ใบวางบิล", "กระดาษต่อเนื่อง", "กระดาษเคมีเปล่า"],
    href: "/services/forms",
    color: "red",
    bgColor: "bg-red-50",
    textColor: "text-red-500",
    borderColor: "hover:border-red-200",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: "งานพิมพ์ออฟเซ็ท",
    description:
      "รับพิมพ์งานระบบออฟเซ็ททุกชนิด หนังสือ โบรชัวร์ สมุด ถุงกระดาษ กล่องบรรจุภัณฑ์ พร้อมเคลือบเงา ยูวี ลามิเนต",
    items: ["หนังสือ", "โบรชัวร์", "สมุด", "ถุงกระดาษ", "กล่องบรรจุภัณฑ์", "งานเคลือบลามิเนต"],
    href: "/services/offset",
    color: "blue",
    bgColor: "bg-blue-50",
    textColor: "text-blue-500",
    borderColor: "hover:border-blue-200",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "งานพิมพ์สติ๊กเกอร์",
    description:
      "งานพิมพ์สติ๊กเกอร์ทุกชนิด ทั้งแบบม้วนและแบบ Sheet ฉลากสินค้า สีสันสดใส ทนทาน",
    items: ["สติ๊กเกอร์ม้วน", "สติ๊กเกอร์แผ่น", "ฉลากสินค้า", "งานพิมพ์ฉลากทุกประเภท"],
    href: "/services/stickers",
    color: "orange",
    bgColor: "bg-orange-50",
    textColor: "text-orange-500",
    borderColor: "hover:border-orange-200",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "งานพิมพ์แบบฟอร์มธุรกิจ",
    description:
      "รับออกแบบและจัดพิมพ์แบบฟอร์มต่อเนื่อง อินวอยซ์ ใบส่งของ ใบจ่ายเงินเดือน หนังสือรับรองภาษี",
    items: ["อินวอยซ์ (Invoice)", "ใบส่งของ / ใบแจ้งหนี้", "ใบกำกับภาษี", "ใบจ่ายเงินเดือน", "หนังสือรับรองการหักภาษี"],
    href: "/services/invoice",
    color: "yellow",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    borderColor: "hover:border-yellow-200",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-linear-to-br from-neutral-900 to-neutral-800 py-16 lg:py-24 overflow-hidden">
        <FloatingParticles variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold">Services</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              บริการของเรา
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              เราให้บริการงานพิมพ์หลากหลายประเภทด้วยเทคโนโลยีที่ทันสมัย
              ตอบโจทย์ทุกความต้องการของธุรกิจคุณ ด้วยประสบการณ์กว่า 30 ปี
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-neutral-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {services.length} บริการหลัก
              </span>
              <span className="text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                ครบวงจร
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <FloatingParticles variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className={`group bg-white rounded-2xl border border-neutral-100 p-8 hover:shadow-xl transition-all duration-500 ${service.borderColor}`}
              >
                <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 ${service.textColor} group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h2>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-neutral-50 rounded-lg text-xs font-medium text-neutral-600 border border-neutral-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                  ดูรายละเอียด
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ไม่แน่ใจว่าต้องการบริการแบบไหน?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            ทีมผู้เชี่ยวชาญของเราพร้อมให้คำปรึกษาฟรี ไม่มีค่าใช้จ่ายในการเสนอราคา
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://line.me/R/ti/p/@p.s.mediasupply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-semibold rounded-xl hover:bg-[#05b34c] transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              แชทผ่าน LINE
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-neutral-50 transition-colors shadow-lg"
            >
              ติดต่อเรา
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

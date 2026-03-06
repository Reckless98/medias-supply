import type { Metadata } from "next";
import Link from "next/link";

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
  },
  {
    title: "ใบกำกับภาษี",
    description:
      "ใบกำกับภาษีที่ถูกต้องตามกฎหมาย พิมพ์คมชัด ข้อมูลครบถ้วน",
  },
  {
    title: "ใบวางบิล",
    description: "ใบวางบิลสำหรับธุรกิจ ออกแบบเฉพาะ พิมพ์ตามจำนวนที่ต้องการ",
  },
  {
    title: "กระดาษต่อเนื่อง",
    description: "กระดาษต่อเนื่องขนาด 9\" x 11\" สำหรับเครื่องพิมพ์ดอทเมทริกซ์ มี 1-4 ชั้น",
  },
  {
    title: "กระดาษเคมีเปล่า",
    description: "กระดาษเคมีต่างสี (Carbonless) คุณภาพดี เกรด A มี 2-7 ชั้น ติดชัดทุกใบ",
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
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
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
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-8">
            ประเภทงานพิมพ์
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formTypes.map((form, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {form.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {form.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-8">
            คุณสมบัติ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <svg
                  className="w-5 h-5 text-primary shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-neutral-700">{feature}</span>
              </div>
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
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-neutral-50 transition-colors shadow-lg"
          >
            ขอใบเสนอราคา
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

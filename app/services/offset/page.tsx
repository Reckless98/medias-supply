import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "งานพิมพ์ออฟเซ็ท | หนังสือ โบรชัวร์ กล่องบรรจุภัณฑ์ เคลือบลามิเนต",
  description:
    "บริการรับพิมพ์งานระบบออฟเซ็ททุกชนิด หนังสือ โบรชัวร์ สมุด ถุงกระดาษ กล่องบรรจุภัณฑ์ พร้อมเคลือบเงายูวี เคลือบลามิเนต งานเจาะ งานไดคัท โทร 081-922-6779",
};

const products = [
  {
    title: "หนังสือ",
    description: "พิมพ์หนังสือทุกประเภท ตั้งแต่ปกอ่อนถึงปกแข็ง เข้าเล่มหลากหลายรูปแบบ",
  },
  {
    title: "โบรชัวร์",
    description: "โบรชัวร์สีสันสดใส พับได้หลายแบบ เหมาะสำหรับโฆษณาสินค้าและบริการ",
  },
  {
    title: "สมุด",
    description: "สมุดจดบันทึก สมุดโน้ต สำหรับองค์กร สามารถออกแบบปกได้ตามต้องการ",
  },
  {
    title: "ถุงกระดาษ",
    description: "ถุงกระดาษคุณภาพดี พิมพ์ลายเฉพาะ เหมาะกับร้านค้าและแบรนด์ต่างๆ",
  },
  {
    title: "กล่องบรรจุภัณฑ์",
    description: "กล่องบรรจุภัณฑ์สวยงาม แข็งแรง ออกแบบเฉพาะสำหรับสินค้าของคุณ",
  },
];

const additionalServices = [
  "เคลือบเงายูวี / เคลือบลามิเนต (ด้าน/มัน)",
  "ไดคัท ตามรูปแบบที่ต้องการ",
  "งานเจาะ / งานเจาะเว้นช่องหน้าต่าง",
  "ปั๊มนูน / ปั๊มฟอยล์",
  "เข้าเล่ม (ไสกาว, เย็บมุง, สันห่วง)",
  "งานปั๊มตัด (Die Cut) ทุกรูปแบบ",
];

export default function OffsetPage() {
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
              งานพิมพ์ออฟเซ็ท
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              งานพิมพ์ออฟเซ็ทคุณภาพระดับมืออาชีพ สีสันสดใส คมชัดทุกรายละเอียด
              ครอบคลุมสิ่งพิมพ์ทุกรูปแบบ
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-8">
            ผลิตภัณฑ์ของเรา
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3">
            บริการเสริม
          </h2>
          <p className="text-neutral-600 mb-8">
            เรามีบริการเสริมหลากหลาย เพื่อให้สิ่งพิมพ์ของคุณสมบูรณ์แบบ
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <svg className="w-5 h-5 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-neutral-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">สนใจงานพิมพ์ออฟเซ็ท?</h2>
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

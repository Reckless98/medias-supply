import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "งานพิมพ์สติ๊กเกอร์ | สติ๊กเกอร์ม้วน สติ๊กเกอร์แผ่น ฉลากสินค้า",
  description:
    "บริการพิมพ์สติ๊กเกอร์คุณภาพสูง สติ๊กเกอร์ม้วน สติ๊กเกอร์แผ่น ฉลากสินค้า งานพิมพ์ฉลากทุกประเภท ทนทาน สีสันสดใส โทร 081-922-6779",
};

const stickerTypes = [
  {
    title: "สติ๊กเกอร์ม้วน",
    description:
      "สติ๊กเกอร์ม้วนสำหรับเครื่องติดอัตโนมัติ พิมพ์สีสันสดใส ทนทาน เหมาะสำหรับสินค้าที่ผลิตจำนวนมาก",
    features: [
      "รองรับเครื่องติดอัตโนมัติ",
      "พิมพ์สีสันคมชัด",
      "เลือกวัสดุได้หลากหลาย",
    ],
  },
  {
    title: "สติ๊กเกอร์แผ่น",
    description:
      "สติ๊กเกอร์แผ่นพิมพ์ตามขนาดที่ต้องการ เหมาะสำหรับสินค้าที่ต้องการความยืดหยุ่นในการใช้งาน",
    features: [
      "เลือกขนาดได้ตามต้องการ",
      "ตัดไดคัทตามรูปทรง",
      "เหมาะสำหรับจำนวนน้อย-มาก",
    ],
  },
  {
    title: "ฉลากสินค้า",
    description:
      "ฉลากสินค้าคุณภาพสูง ออกแบบสวยงาม ทนน้ำ ทนแดด เหมาะสำหรับสินค้าทุกประเภท",
    features: [
      "ทนน้ำ ทนแดด",
      "พิมพ์บาร์โค้ด/QR Code ได้",
      "ออกแบบเฉพาะสำหรับแบรนด์",
    ],
  },
];

const materials = [
  "กระดาษอาร์ต (Art Paper)",
  "กระดาษมัน (Glossy)",
  "กระดาษด้าน (Matte)",
  "กระดาษใส (Transparent)",
  "วัสดุกันน้ำ (Waterproof)",
  "ฟอยล์เงิน/ทอง",
];

export default function StickersPage() {
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
              งานพิมพ์สติ๊กเกอร์
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              สติ๊กเกอร์คุณภาพสูง ทนทาน สีสันสดใส
              เหมาะสำหรับติดสินค้าทุกประเภท ด้วยวัสดุหลากหลายให้เลือก
            </p>
          </div>
        </div>
      </section>

      {/* Sticker Types */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-8">
            ประเภทสติ๊กเกอร์
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {stickerTypes.map((sticker, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {sticker.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  {sticker.description}
                </p>
                <ul className="space-y-2">
                  {sticker.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-neutral-600">
                      <svg className="w-4 h-4 text-secondary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3">
            วัสดุที่เลือกได้
          </h2>
          <p className="text-neutral-600 mb-8">
            เรามีวัสดุหลากหลายให้เลือก เพื่อตอบโจทย์ทุกการใช้งาน
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {materials.map((material, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <div className="w-3 h-3 bg-primary rounded-full shrink-0" />
                <span className="text-neutral-700">{material}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">สนใจงานพิมพ์สติ๊กเกอร์?</h2>
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

import type { Metadata } from "next";
import Link from "next/link";
import PortfolioGallery from "@/components/PortfolioGallery";
import FloatingParticles from "@/components/FloatingParticles";

export const metadata: Metadata = {
  title: "ผลงานตัวอย่าง | ตัวอย่างงานพิมพ์คอมพิวเตอร์ฟอร์ม",
  description:
    "ชมตัวอย่างผลงานงานพิมพ์คอมพิวเตอร์ฟอร์ม ใบกำกับภาษี ใบเสร็จรับเงิน ใบส่งของ ใบสั่งซื้อ และแบบฟอร์มธุรกิจ จาก P.S. MEDIAS SUPPLY CO., LTD.",
  keywords: ["ตัวอย่างงานพิมพ์", "ผลงานโรงพิมพ์", "ตัวอย่างใบเสร็จ", "ตัวอย่างใบกำกับภาษี", "ตัวอย่างแบบฟอร์มธุรกิจ"],
  openGraph: {
    title: "ผลงานตัวอย่าง | P.S. MEDIAS SUPPLY",
    description: "ชมตัวอย่างผลงานงานพิมพ์คุณภาพสูง ใบเสร็จ ใบกำกับภาษี ใบส่งของ แบบฟอร์มธุรกิจ",
    type: "website",
    locale: "th_TH",
    url: "https://psmediassupply.com/portfolio",
  },
  alternates: {
    canonical: "https://psmediassupply.com/portfolio",
  },
};

const categories = [
  { id: "all", label: "ทั้งหมด" },
  { id: "receipt", label: "ใบเสร็จรับเงิน" },
  { id: "tax-invoice", label: "ใบกำกับภาษี" },
  { id: "delivery", label: "ใบส่งของ / ใบแจ้งหนี้" },
  { id: "business-form", label: "แบบฟอร์มธุรกิจ" },
];

const portfolioItems = [
  // ใบเสร็จรับเงิน (Receipts)
  {
    src: "/portfolio/receipt-paiboonphan.jpeg",
    alt: "ใบเสร็จรับเงิน - กระดาษต่อเนื่องพิมพ์สี",
    category: "receipt",
    title: "ใบเสร็จรับเงิน",
    description: "พิมพ์หลายสี พร้อมโลโก้บริษัท บนกระดาษต่อเนื่อง",
    color: "red",
  },
  {
    src: "/portfolio/receipt-islamic-coop.jpeg",
    alt: "ใบเสร็จรับเงินยืมเพื่อเหตุฉุกเฉิน - แบบ 2 ตอน",
    category: "receipt",
    title: "ใบเสร็จรับเงิน (2 ตอน)",
    description: "แบบฟอร์มต่อเนื่อง 2 ตอนต่อแผ่น ประหยัดกระดาษ",
    color: "neutral",
  },
  {
    src: "/portfolio/receipt-pro-automotive.jpeg",
    alt: "ต้นฉบับใบเสร็จรับเงิน - พิมพ์สีเขียว",
    category: "receipt",
    title: "ต้นฉบับใบเสร็จรับเงิน",
    description: "พิมพ์สีเขียว พร้อมตารางรายการสินค้าและส่วนลด",
    color: "green",
  },
  {
    src: "/portfolio/receipt-hong-heng-huat.jpeg",
    alt: "ต้นฉบับใบเสร็จรับเงิน - พิมพ์สีชมพู",
    category: "receipt",
    title: "ต้นฉบับใบเสร็จรับเงิน",
    description: "พิมพ์สีชมพู รูปแบบเดียวกัน ปรับแต่งตามบริษัท",
    color: "pink",
  },
  {
    src: "/portfolio/receipt-kp.jpeg",
    alt: "ต้นฉบับใบเสร็จรับเงิน - พิมพ์สีส้ม",
    category: "receipt",
    title: "ต้นฉบับใบเสร็จรับเงิน",
    description: "พิมพ์สีส้ม พร้อมโลโก้และตารางรายละเอียดครบถ้วน",
    color: "orange",
  },

  // ใบกำกับภาษี (Tax Invoices)
  {
    src: "/portfolio/tax-invoice-yongkee.jpeg",
    alt: "ใบกำกับภาษี - กระดาษต่อเนื่องพิมพ์สีเหลือง",
    category: "tax-invoice",
    title: "ใบกำกับภาษี",
    description: "พิมพ์สีเหลือง-ดำ ตารางรายการสินค้า พร้อมช่องลายเซ็น",
    color: "yellow",
  },
  {
    src: "/portfolio/tax-invoice-matichon.jpeg",
    alt: "ใบเสร็จรับเงิน/ใบกำกับภาษี - พิมพ์สีน้ำเงิน",
    category: "tax-invoice",
    title: "ใบเสร็จรับเงิน / ใบกำกับภาษี",
    description: "พิมพ์สีน้ำเงิน ดีไซน์ทันสมัย พร้อมโลโก้บริษัท",
    color: "blue",
  },

  // ใบส่งของ / ใบแจ้งหนี้ (Delivery Orders / Invoices)
  {
    src: "/portfolio/delivery-yongkee.jpeg",
    alt: "ใบส่งสินค้า/ใบแจ้งหนี้ - กระดาษต่อเนื่องพิมพ์สีฟ้า",
    category: "delivery",
    title: "ใบส่งสินค้า / ใบแจ้งหนี้",
    description: "พิมพ์สีฟ้า พร้อมตารางรายการสินค้าและเงื่อนไขชำระเงิน",
    color: "blue",
  },
  {
    src: "/portfolio/invoice-matichon.jpeg",
    alt: "ใบแจ้งหนี้ - กระดาษต่อเนื่องลายทแยง",
    category: "delivery",
    title: "ใบแจ้งหนี้",
    description: "พิมพ์สีส้มพร้อมลายทแยง ดีไซน์เฉพาะ โดดเด่น",
    color: "orange",
  },
  {
    src: "/portfolio/delivery-sunanthaform.jpeg",
    alt: "ใบส่งของ/ใบแจ้งหนี้ - กระดาษต่อเนื่อง",
    category: "delivery",
    title: "ใบส่งของ / ใบแจ้งหนี้",
    description: "แบบฟอร์มมาตรฐาน พิมพ์ขาว-ดำ พร้อมระบบเลขที่อัตโนมัติ",
    color: "neutral",
  },
  {
    src: "/portfolio/temporary-invoice.jpeg",
    alt: "ใบส่งของชั่วคราว - Temporary Invoice",
    category: "delivery",
    title: "ใบส่งของชั่วคราว",
    description: "Temporary Invoice สำหรับการจัดส่งสินค้าชั่วคราว",
    color: "neutral",
  },

  // แบบฟอร์มธุรกิจ (Business Forms)
  {
    src: "/portfolio/service-sheet-chakawal.jpeg",
    alt: "ใบรายงานการเข้าบริการ - Service Sheet",
    category: "business-form",
    title: "ใบรายงานการเข้าบริการ",
    description: "Service Sheet พร้อมช่องตรวจเช็คและรายการอาการเสีย",
    color: "neutral",
  },
  {
    src: "/portfolio/purchase-order-kangwal.jpeg",
    alt: "ใบสั่งซื้อ - Purchase Order พิมพ์สีน้ำเงิน",
    category: "business-form",
    title: "ใบสั่งซื้อ (Purchase Order)",
    description: "พิมพ์สีน้ำเงิน แบบ 2 ภาษา พร้อมตราบริษัทรับรอง",
    color: "blue",
  },
  {
    src: "/portfolio/guest-folio-charoenthani.jpeg",
    alt: "Guest Folio - แบบฟอร์มโรงแรม",
    category: "business-form",
    title: "Guest Folio (โรงแรม)",
    description: "แบบฟอร์มเฉพาะทาง สำหรับธุรกิจโรงแรม พิมพ์หลายสี",
    color: "neutral",
  },
  {
    src: "/portfolio/coop-form.jpeg",
    alt: "แบบฟอร์มสหกรณ์ - กระดาษต่อเนื่อง",
    category: "business-form",
    title: "แบบฟอร์มสหกรณ์",
    description: "พิมพ์สีน้ำเงิน สำหรับสหกรณ์ พร้อมตารางรายการ",
    color: "blue",
  },
  {
    src: "/portfolio/tax-cert-marubeni.jpeg",
    alt: "หนังสือรับรองการหักภาษี ณ ที่จ่าย",
    category: "business-form",
    title: "หนังสือรับรองการหักภาษี ณ ที่จ่าย",
    description: "ตามมาตรา 50 ทวิ แบบฟอร์มราชการ พิมพ์ตามมาตรฐาน",
    color: "yellow",
  },
];



export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-linear-to-br from-neutral-900 to-neutral-800 py-16 lg:py-24 overflow-hidden">
        <FloatingParticles variant="dark" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold">Portfolio</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              ผลงานตัวอย่าง
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              รวมตัวอย่างงานพิมพ์คอมพิวเตอร์ฟอร์มและกระดาษต่อเนื่องจากลูกค้าที่ไว้วางใจเรา
              ทุกงานผลิตด้วยคุณภาพสูง ตรงตามมาตรฐาน
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm text-neutral-400">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 bg-primary rounded-full" />
                {portfolioItems.length} ตัวอย่างผลงาน
              </span>
              <span className="text-neutral-600">•</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                {categories.length - 1} ประเภท
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-16 lg:top-20 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={cat.id === "all" ? "#gallery" : `#${cat.id}`}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border border-neutral-200 text-neutral-700 hover:border-primary hover:text-primary hover:bg-primary-light/30 transition-all duration-200"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative py-16 lg:py-24 overflow-hidden" id="gallery">
        <FloatingParticles variant="light" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Receipt Section */}
          <div id="receipt" className="mb-16 scroll-mt-36">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">ใบเสร็จรับเงิน</h2>
                <p className="text-neutral-500 text-sm">Receipt — {portfolioItems.filter(i => i.category === "receipt").length} ตัวอย่าง</p>
              </div>
            </div>
            <p className="text-neutral-500 text-sm mb-8 ml-13">ใบเสร็จรับเงินแบบกระดาษต่อเนื่อง พิมพ์หลายสี ออกแบบเฉพาะตามบริษัทลูกค้า</p>
            <PortfolioGallery items={portfolioItems.filter(i => i.category === "receipt")} />
          </div>

          {/* Tax Invoice Section */}
          <div id="tax-invoice" className="mb-16 scroll-mt-36">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">ใบกำกับภาษี</h2>
                <p className="text-neutral-500 text-sm">Tax Invoice — {portfolioItems.filter(i => i.category === "tax-invoice").length} ตัวอย่าง</p>
              </div>
            </div>
            <p className="text-neutral-500 text-sm mb-8 ml-13">ใบกำกับภาษีและใบเสร็จรวม พิมพ์คมชัด พร้อมโลโก้และรายละเอียดครบถ้วน</p>
            <PortfolioGallery items={portfolioItems.filter(i => i.category === "tax-invoice")} />
          </div>

          {/* Delivery / Invoice Section */}
          <div id="delivery" className="mb-16 scroll-mt-36">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">ใบส่งของ / ใบแจ้งหนี้</h2>
                <p className="text-neutral-500 text-sm">Delivery Order & Invoice — {portfolioItems.filter(i => i.category === "delivery").length} ตัวอย่าง</p>
              </div>
            </div>
            <p className="text-neutral-500 text-sm mb-8 ml-13">ใบส่งของ ใบแจ้งหนี้ ใบส่งของชั่วคราว ออกแบบให้ใช้งานง่าย มีช่องลงนามครบ</p>
            <PortfolioGallery items={portfolioItems.filter(i => i.category === "delivery")} />
          </div>

          {/* Business Forms Section */}
          <div id="business-form" className="mb-16 scroll-mt-36">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-neutral-100 rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-neutral-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-neutral-900">แบบฟอร์มธุรกิจ</h2>
                <p className="text-neutral-500 text-sm">Business Forms — {portfolioItems.filter(i => i.category === "business-form").length} ตัวอย่าง</p>
              </div>
            </div>
            <p className="text-neutral-500 text-sm mb-8 ml-13">ใบสั่งซื้อ ใบรายงานบริการ Guest Folio แบบฟอร์มสหกรณ์ และหนังสือรับรองภาษี</p>
            <PortfolioGallery items={portfolioItems.filter(i => i.category === "business-form")} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            ต้องการงานพิมพ์แบบนี้?
          </h2>
          <p className="text-neutral-600 text-lg mb-8 max-w-2xl mx-auto">
            เราพร้อมออกแบบและผลิตงานพิมพ์คอมพิวเตอร์ฟอร์มตามความต้องการของคุณ
            ไม่ว่าจะเป็นงานพิมพ์กี่สี กี่ชั้น ก็สั่งได้
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://line.me/R/ti/p/@p.s.mediasupply"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#06C755] text-white font-semibold rounded-xl hover:bg-[#05b34c] transition-all duration-300 shadow-lg shadow-[#06C755]/25"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              แชทผ่าน LINE
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25"
            >
              ขอใบเสนอราคา
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



import type { Metadata } from "next";
import Link from "next/link";
import FloatingParticles from "@/components/FloatingParticles";

export const metadata: Metadata = {
  title: "บทความ | ความรู้เกี่ยวกับงานพิมพ์",
  description:
    "บทความความรู้เกี่ยวกับงานพิมพ์ ใบเสร็จ ใบกำกับภาษี สติ๊กเกอร์ แบบฟอร์มธุรกิจ คอมพิวเตอร์ฟอร์ม จาก P.S. MEDIAS SUPPLY ผู้เชี่ยวชาญงานพิมพ์มากว่า 30 ปี",
  keywords: ["บทความงานพิมพ์", "ความรู้โรงพิมพ์", "วิธีพิมพ์ใบเสร็จ", "ข้อมูลงานพิมพ์"],
  openGraph: {
    title: "บทความ | P.S. MEDIAS SUPPLY CO., LTD.",
    description: "บทความความรู้เกี่ยวกับงานพิมพ์จาก P.S. MEDIAS SUPPLY",
    type: "website",
    locale: "th_TH",
    url: "https://psmediassupply.com/blog",
  },
  alternates: {
    canonical: "https://psmediassupply.com/blog",
  },
};

const posts = [
  {
    slug: "how-to-print-receipt-books",
    title: "วิธีเลือกพิมพ์ใบเสร็จรับเงินให้เหมาะกับธุรกิจ",
    excerpt: "คู่มือครบวงจรสำหรับการเลือกประเภทใบเสร็จรับเงิน กระดาษ จำนวนชั้น และรูปแบบที่เหมาะกับธุรกิจของคุณ",
    date: "2026-03-01",
  },
  {
    slug: "difference-between-invoice-and-tax-invoice",
    title: "ความแตกต่างระหว่างใบแจ้งหนี้ (Invoice) กับใบกำกับภาษี (Tax Invoice)",
    excerpt: "อธิบายความแตกต่างของเอกสารทางธุรกิจ ใบแจ้งหนี้ vs ใบกำกับภาษี เมื่อไหร่ต้องใช้อะไร และข้อกำหนดตามกฎหมาย",
    date: "2026-02-25",
  },
  {
    slug: "best-sticker-printing-for-products",
    title: "เลือกสติ๊กเกอร์สินค้าอย่างไรให้ขายดี",
    excerpt: "เคล็ดลับการเลือกวัสดุ การออกแบบ และเทคนิคการพิมพ์สติ๊กเกอร์ที่ช่วยให้สินค้าของคุณโดดเด่นบนชั้นวาง",
    date: "2026-02-18",
  },
  {
    slug: "how-business-forms-work",
    title: "แบบฟอร์มธุรกิจ: ทุกอย่างที่ต้องรู้ก่อนสั่งพิมพ์",
    excerpt: "รู้จักแบบฟอร์มธุรกิจแต่ละประเภท กระดาษเคมี NCR ทำงานอย่างไร และวิธีเลือกแบบฟอร์มที่เหมาะกับธุรกิจ",
    date: "2026-02-10",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-neutral-900 to-neutral-800 py-16 lg:py-24">
        <FloatingParticles variant="dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold">บทความ</span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              ความรู้เกี่ยวกับงานพิมพ์
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              บทความและความรู้เกี่ยวกับงานพิมพ์ เอกสารธุรกิจ สติ๊กเกอร์ และแบบฟอร์มต่างๆ
              จากประสบการณ์กว่า 30 ปีของ P.S. MEDIAS SUPPLY
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white border border-neutral-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="h-48 bg-linear-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <svg className="w-16 h-16 text-primary/30 group-hover:text-primary/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <div className="p-6">
                  <time className="text-xs text-neutral-400">
                    {new Date(post.date).toLocaleDateString("th-TH", { year: "numeric", month: "long", day: "numeric" })}
                  </time>
                  <h2 className="mt-2 text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-neutral-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-primary text-sm font-medium">
                    อ่านต่อ
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">ต้องการงานพิมพ์? ติดต่อเราวันนี้</h2>
          <p className="text-white/80 mb-8">เราพร้อมให้คำปรึกษาและบริการงานพิมพ์ครบวงจร</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-neutral-50 transition-colors shadow-lg"
            >
              ขอใบเสนอราคา
            </Link>
            <a
              href="tel:0819226779"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-neutral-900 font-semibold rounded-xl hover:bg-secondary-dark transition-colors"
            >
              โทร 081-922-6779
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

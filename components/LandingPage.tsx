import Link from "next/link";
import ContactForm from "@/components/ContactForm";

interface Product {
  name: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface RelatedLink {
  href: string;
  label: string;
}

interface LandingPageProps {
  headline: string;
  subheadline: string;
  keyword: string;
  description: string;
  products: Product[];
  benefits: Benefit[];
  relatedLinks: RelatedLink[];
  ctaText?: string;
}

export default function LandingPage({
  headline,
  subheadline,
  keyword,
  description,
  products,
  benefits,
  relatedLinks,
  ctaText = "ขอใบเสนอราคา",
}: LandingPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-neutral-900 via-neutral-800 to-neutral-900 py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary text-xs font-medium">P.S. MEDIAS SUPPLY CO., LTD.</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {headline}
            </h1>
            <p className="text-lg text-neutral-300 leading-relaxed mb-6 max-w-2xl">
              {subheadline}
            </p>
            <p className="text-secondary font-semibold mb-8">
              งานดีมีคุณภาพ ซื่อสัตย์ ตรงต่อเวลา ราคายุติธรรม
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25"
              >
                {ctaText}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="tel:0819226779"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-neutral-900 font-semibold rounded-xl hover:bg-secondary-dark transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                โทร 081-922-6779
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
              บริการ{keyword}คุณภาพสูง
            </h2>
            <p className="text-neutral-600 leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 text-center">
            ตัวอย่างผลิตภัณฑ์
          </h2>
          <p className="text-neutral-600 text-center mb-10">
            ผลงาน{keyword}ที่เราให้บริการ
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <div
                key={i}
                className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{product.name}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 text-center">
            ทำไมต้องเลือกเรา?
          </h2>
          <p className="text-neutral-600 text-center mb-10">
            P.S. MEDIAS SUPPLY คือโรงพิมพ์ที่ลูกค้าไว้วางใจมากว่า 20 ปี
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4 p-5 bg-neutral-50 rounded-xl">
                <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 mb-1">{b.title}</h3>
                  <p className="text-neutral-600 text-sm">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote-form" className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                ขอใบเสนอราคา{keyword}
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                กรอกข้อมูลด้านล่าง เราจะติดต่อกลับพร้อมใบเสนอราคาภายใน 24 ชั่วโมง
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <a href="tel:0819226779" className="text-neutral-900 font-semibold hover:text-primary transition-colors">081-922-6779</a>
                    <span className="text-neutral-400 mx-2">|</span>
                    <a href="tel:0803406923" className="text-neutral-900 font-semibold hover:text-primary transition-colors">080-340-6923</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:psmedia65@gmail.com" className="text-neutral-900 font-semibold hover:text-primary transition-colors">psmedia65@gmail.com</a>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-neutral-600 text-sm">68 ซอยงามวงศ์วาน 18 แยก 6/7 ต.บางเขน อ.เมืองนนทบุรี จ.นนทบุรี 11000</span>
                </div>
              </div>
            </div>
            <div className="bg-white border border-neutral-100 rounded-2xl p-6 lg:p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 lg:py-16 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-6 text-center">บริการอื่นๆ ที่เกี่ยวข้อง</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedLinks.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className="px-5 py-2.5 bg-neutral-800 text-neutral-300 text-sm rounded-lg hover:bg-primary hover:text-white transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

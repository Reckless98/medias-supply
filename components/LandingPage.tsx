import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FloatingParticles from "@/components/FloatingParticles";
import {
  IconProduct1, IconProduct2, IconProduct3, IconProduct4, IconProduct5, IconProduct6,
  IconBenefit1, IconBenefit2, IconBenefit3, IconBenefit4, IconBenefit5, IconBenefit6,
  IconPhone, IconMail, IconLine, IconArrowRight, IconMessage, IconPin
} from "@/components/Icons";
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

const productIcons = [
  <IconProduct1 key="0" className="w-6 h-6" />,
  <IconProduct2 key="1" className="w-6 h-6" />,
  <IconProduct3 key="2" className="w-6 h-6" />,
  <IconProduct4 key="3" className="w-6 h-6" />,
  <IconProduct5 key="4" className="w-6 h-6" />,
  <IconProduct6 key="5" className="w-6 h-6" />,
];

const benefitIcons = [
  <IconBenefit1 key="b0" className="w-5 h-5" />,
  <IconBenefit2 key="b1" className="w-5 h-5" />,
  <IconBenefit3 key="b2" className="w-5 h-5" />,
  <IconBenefit4 key="b3" className="w-5 h-5" />,
  <IconBenefit5 key="b4" className="w-5 h-5" />,
  <IconBenefit6 key="b5" className="w-5 h-5" />,
];

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
        <FloatingParticles variant="dark" />
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25"
              >
                {ctaText}
                <IconArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:0819226779"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-neutral-900 font-semibold rounded-xl hover:bg-secondary-dark transition-all duration-300"
              >
                <IconPhone className="w-5 h-5" />
                โทร 081-922-6779
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                บริการ{keyword}คุณภาพสูง
              </h2>
              <p className="text-neutral-600 leading-relaxed">{description}</p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 text-center">
              ตัวอย่างผลิตภัณฑ์
            </h2>
            <p className="text-neutral-600 text-center mb-10">
              ผลงาน{keyword}ที่เราให้บริการ
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 80}>
                <div className="bg-white border border-neutral-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4 text-primary">
                    {productIcons[i % productIcons.length]}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">{product.name}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{product.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-3 text-center">
              ทำไมต้องเลือกเรา?
            </h2>
            <p className="text-neutral-600 text-center mb-10">
              P.S. MEDIAS SUPPLY คือโรงพิมพ์ที่ลูกค้าไว้วางใจมากว่า 30 ปี
            </p>
          </AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <AnimateOnScroll key={i} animation="scale-in" delay={i * 60}>
                <div className="flex gap-4 p-5 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-primary/20 hover:shadow-md transition-all duration-300 h-full">
                  <div className="w-10 h-10 bg-primary-light rounded-lg flex items-center justify-center shrink-0 text-primary">
                    {benefitIcons[i % benefitIcons.length]}
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">{b.title}</h3>
                    <p className="text-neutral-600 text-sm">{b.description}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="quote-form" className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimateOnScroll animation="fade-right">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900 mb-4">
                  ขอใบเสนอราคา{keyword}
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  ติดต่อเราวันนี้เพื่อรับใบเสนอราคาฟรี เราจะติดต่อกลับภายใน 24 ชั่วโมง
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <IconPhone className="w-5 h-5 text-primary shrink-0" />
                    <div>
                      <a href="tel:0819226779" className="text-neutral-900 font-semibold hover:text-primary transition-colors">081-922-6779</a>
                      <span className="text-neutral-400 mx-2">|</span>
                      <a href="tel:0803406923" className="text-neutral-900 font-semibold hover:text-primary transition-colors">080-340-6923</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <IconMail className="w-5 h-5 text-primary shrink-0" />
                    <a href="mailto:psmedia65@gmail.com" className="text-neutral-900 font-semibold hover:text-primary transition-colors">psmedia65@gmail.com</a>
                  </div>
                  <a
                    href="https://line.me/R/ti/p/@p.s.mediasupply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 bg-[#06C755] text-white rounded-xl font-semibold hover:brightness-110 transition-all text-sm mt-2"
                  >
                    <IconLine className="w-5 h-5" />
                    แชทผ่าน LINE
                  </a>
                  <div className="flex items-start gap-3 mt-2">
                    <IconPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-neutral-600 text-sm">68 ซอยงามวงศ์วาน 18 แยก 6/7 ต.บางเขน อ.เมืองนนทบุรี จ.นนทบุรี 11000</span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left">
              <div className="bg-white border border-neutral-100 rounded-2xl p-8 lg:p-10 shadow-sm text-center">
                <div aria-hidden="true" className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconMessage className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">ส่งข้อความถึงเรา</h3>
                <p className="text-neutral-600 text-sm mb-6">
                  กรอกข้อมูลในแบบฟอร์มติดต่อ เราจะตอบกลับโดยเร็วที่สุด
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25"
                >
                  ไปยังหน้าติดต่อเรา
                  <IconArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </AnimateOnScroll>
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

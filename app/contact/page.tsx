import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import FloatingParticles from "@/components/FloatingParticles";

export const metadata: Metadata = {
  title: "ติดต่อเรา | ขอใบเสนอราคางานพิมพ์",
  description:
    "ติดต่อ P.S. MEDIAS SUPPLY CO., LTD. สำหรับงานพิมพ์ทุกประเภท โทร 081-922-6779, 080-340-6923 อีเมล psmedia65@gmail.com",
  keywords: ["ติดต่อโรงพิมพ์", "ขอใบเสนอราคางานพิมพ์", "โรงพิมพ์นนทบุรี", "โรงพิมพ์ใกล้ฉัน", "สั่งพิมพ์งาน"],
  openGraph: {
    title: "ติดต่อเรา | P.S. MEDIAS SUPPLY",
    description: "ติดต่อสอบถามงานพิมพ์ ขอใบเสนอราคา โทร 081-922-6779, 080-340-6923",
    type: "website",
    locale: "th_TH",
    url: "https://psmediassupply.com/contact",
  },
  alternates: {
    canonical: "https://psmediassupply.com/contact",
  },
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "ที่อยู่",
    values: [
      { text: "68 ซอยงามวงศ์วาน 18 แยก 6/7", href: "" },
      { text: "ต.บางเขน อ.เมือง จ.นนทบุรี 11000", href: "" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "โทรศัพท์",
    values: [
      { text: "081-922-6779", href: "tel:0819226779" },
      { text: "080-340-6923", href: "tel:0803406923" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#06C755">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
    label: "LINE Official",
    values: [
      { text: "แชทผ่าน LINE @p.s.mediasupply", href: "https://line.me/R/ti/p/@p.s.mediasupply", external: true },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "อีเมล",
    values: [
      { text: "psmedia65@gmail.com", href: "mailto:psmedia65@gmail.com" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "เวลาทำการ",
    values: [
      { text: "จันทร์ - เสาร์: 8:00 - 17:00 น.", href: "" },
    ],
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-br from-neutral-900 to-neutral-800 py-16 lg:py-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#06C755]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <FloatingParticles variant="dark" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-semibold">
              ติดต่อเรา
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              พร้อมให้บริการคุณ
            </h1>
            <p className="mt-4 text-neutral-300 text-lg leading-relaxed">
              ไม่ว่าจะเป็นคำถามเกี่ยวกับบริการ หรือต้องการขอใบเสนอราคา
              ทีมงานของเราพร้อมตอบทุกคำถามของคุณ
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="https://line.me/R/ti/p/@p.s.mediasupply"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#06C755] text-white font-semibold rounded-xl hover:bg-[#05b34c] transition-all duration-300 shadow-lg shadow-[#06C755]/25"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                แชทผ่าน LINE
              </a>
              <a
                href="tel:0819226779"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
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

      {/* Contact Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                ข้อมูลติดต่อ
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-4 bg-neutral-50 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center shrink-0 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 text-sm mb-1">
                        {info.label}
                      </p>
                      {info.values.map((val, vIndex) =>
                        val.href ? (
                          <a
                            key={vIndex}
                            href={val.href}
                            {...("external" in val && val.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="block text-neutral-600 text-sm hover:text-primary transition-colors"
                          >
                            {val.text}
                          </a>
                        ) : (
                          <p
                            key={vIndex}
                            className="text-neutral-600 text-sm"
                          >
                            {val.text}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Info */}
              <div className="mt-8 p-6 bg-primary-light/30 rounded-2xl border border-primary/10">
                <h3 className="font-bold text-neutral-900 mb-2">
                  P.S. MEDIAS SUPPLY CO., LTD.
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                  บริษัท พี.เอส. มีเดียส์ ซัพพลาย จำกัด
                  ผู้เชี่ยวชาญด้านงานพิมพ์ครบวงจร
                  ให้บริการงานพิมพ์คุณภาพสูงสำหรับธุรกิจทุกประเภท
                  ด้วยประสบการณ์มากกว่า 30 ปี
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  ดูบริการของเรา
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 space-y-6">
              {/* Quick LINE banner */}
              <a
                href="https://line.me/R/ti/p/@p.s.mediasupply"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#06C755]/5 border border-[#06C755]/20 rounded-2xl hover:bg-[#06C755]/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#06C755] rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-neutral-900 text-sm">ต้องการคำตอบเร็ว?</p>
                  <p className="text-neutral-600 text-sm">แชทกับเราผ่าน LINE ได้ทันที ตอบเร็วภายใน 5 นาที</p>
                </div>
                <svg className="w-5 h-5 text-neutral-400 group-hover:text-[#06C755] transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              <div className="bg-white border border-neutral-100 rounded-2xl p-6 lg:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                  ส่งข้อความผ่าน LINE
                </h2>
                <p className="text-neutral-600 text-sm mb-6">
                  กรอกรายละเอียด แล้วกดส่ง — ระบบจะเปิด LINE ให้คุณส่งข้อความถึงเราโดยตรง
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-primary text-sm font-semibold">แผนที่</span>
            <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-neutral-900">
              สถานที่ตั้งของเรา
            </h2>
            <p className="mt-3 text-neutral-600 max-w-xl mx-auto">
              68 ซอยงามวงศ์วาน 18 แยก 6/7 ต.บางเขน อ.เมืองนนทบุรี จ.นนทบุรี 11000
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.0!2d100.5!3d13.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDUxJzAwLjAiTiAxMDDCsDMwJzAwLjAiRQ!5e0!3m2!1sth!2sth!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="P.S. MEDIAS SUPPLY CO., LTD. - แผนที่"
              className="w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}

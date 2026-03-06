import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "ติดต่อเรา | ขอใบเสนอราคางานพิมพ์",
  description:
    "ติดต่อ P.S. MEDIAS SUPPLY CO., LTD. สำหรับงานพิมพ์ทุกประเภท โทร 081-922-6779, 080-340-6923 อีเมล psmedia65@gmail.com",
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
    label: "โทรศัพท์ / Line",
    values: [
      { text: "081-922-6779", href: "tel:0819226779" },
      { text: "080-340-6923", href: "tel:0803406923" },
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
      <section className="bg-linear-to-br from-neutral-900 to-neutral-800 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <p className="text-sm text-neutral-600 leading-relaxed">
                  บริษัท พี.เอส. มีเดียส์ ซัพพลาย จำกัด
                  ผู้เชี่ยวชาญด้านงานพิมพ์ครบวงจร
                  ให้บริการงานพิมพ์คุณภาพสูงสำหรับธุรกิจทุกประเภท
                  ด้วยประสบการณ์มากกว่า 20 ปี
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-neutral-100 rounded-2xl p-6 lg:p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-neutral-900 mb-2">
                  ส่งข้อความถึงเรา
                </h2>
                <p className="text-neutral-600 text-sm mb-6">
                  กรอกข้อมูลด้านล่าง เราจะติดต่อกลับโดยเร็วที่สุด
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

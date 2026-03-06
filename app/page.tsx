import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import QuoteForm from "@/components/QuoteForm";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "งานพิมพ์คอมพิวเตอร์ฟอร์ม",
    description: "รับพิมพ์กระดาษต่อเนื่องคอมพิวเตอร์ทุกชนิด คุณภาพสูง ตรงเวลา",
    items: ["ใบเสร็จรับเงิน", "ใบกำกับภาษี", "ใบวางบิล", "กระดาษต่อเนื่อง", "กระดาษเคมีเปล่า"],
    href: "/services/forms",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    title: "งานพิมพ์ออฟเซ็ท",
    description: "รับพิมพ์งานระบบออฟเซ็ททุกชนิด พร้อมเคลือบเงา ยูวี",
    items: ["หนังสือ", "โบรชัวร์", "สมุด", "ถุงกระดาษ", "กล่องบรรจุภัณฑ์", "งานเคลือบลามิเนต"],
    href: "/services/offset",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "งานพิมพ์สติ๊กเกอร์",
    description: "งานพิมพ์สติ๊กเกอร์ทุกชนิด ทั้งแบบม้วนและแบบ Sheet",
    items: ["สติ๊กเกอร์ม้วน", "สติ๊กเกอร์แผ่น", "ฉลากสินค้า", "งานพิมพ์ฉลากทุกประเภท"],
    href: "/services/stickers",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "งานพิมพ์แบบฟอร์มธุรกิจ",
    description: "รับออกแบบและจัดพิมพ์แบบฟอร์มต่อเนื่องบนกระดาษคอมพิวเตอร์ทุกขนาด",
    items: ["อินวอยซ์ (Invoice)", "ใบส่งของ / ใบแจ้งหนี้", "ใบกำกับภาษี", "ใบจ่ายเงินเดือนพนักงาน", "หนังสือรับรองการหักภาษี"],
    href: "/services/invoice",
  },
];

const whyChooseUs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "งานดีมีคุณภาพ",
    description: "รับรองคุณภาพและผลงาน แบบฟอร์มมีมาตรฐาน บริการเยี่ยม เปี่ยมคุณภาพ",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "ตรงต่อเวลา",
    description: "ส่งมอบงานตรงตามนัดหมาย ไม่เคยผิดนัด ลูกค้าวางใจได้",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "ราคายุติธรรม",
    description: "ราคาเป็นกันเอง คุ้มค่าทุกบาท ไม่มีค่าใช้จ่ายซ่อนเร้น",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "ซื่อสัตย์",
    description: "ดำเนินธุรกิจด้วยความซื่อสัตย์ จริงใจกับลูกค้าทุกราย เป็นที่ไว้วางใจ",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "เทคโนโลยีทันสมัย",
    description: "ใช้เครื่องพิมพ์และเทคโนโลยีที่ทันสมัย เพื่อผลงานที่ดีที่สุด",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    title: "บริการครบวงจร",
    description: "ตั้งแต่ออกแบบ พิมพ์ ไดคัท เคลือบ เจาะ จนถึงจัดส่ง ครบจบที่เดียว",
  },
];

const paperTypes = [
  { size: "กระดาษต่อเนื่อง 9\" x 11\"", layers: ["1 ชั้น", "2 ชั้น", "3 ชั้น", "4 ชั้น"] },
  { size: "กระดาษเคมีเปล่า (Carbonless)", layers: ["2 ชั้น", "3 ชั้น", "4 ชั้น", "5 ชั้น", "6 ชั้น", "7 ชั้น"] },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-neutral-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              ยินดีให้บริการ
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900">
              บริการงานพิมพ์ครบทุกรูปแบบ
            </h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              เราให้บริการงานพิมพ์หลากหลายประเภท ด้วยเทคโนโลยีที่ทันสมัย
              เพื่อตอบโจทย์ทุกความต้องการของธุรกิจคุณ
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Paper Types Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              จำหน่าย
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900">
              กระดาษต่อเนื่องและกระดาษเคมี
            </h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              ใช้กระดาษชนิดเกรด A ติดชัดทุกใบ กระดาษเคมีต่างสี (Carbonless) คุณภาพดี
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {paperTypes.map((paper, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-2xl p-6 lg:p-8 border border-neutral-100"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {paper.size}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {paper.layers.map((layer, lIndex) => (
                    <span
                      key={lIndex}
                      className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-neutral-700 border border-neutral-200 shadow-sm"
                    >
                      {layer}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Company Introduction */}
      <section className="py-16 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                เกี่ยวกับเรา
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900">
                ผู้ผลิตและผู้เชี่ยวชาญ
                <br />
                <span className="text-primary">ด้านงานพิมพ์คุณภาพ</span>
              </h2>
              <p className="mt-6 text-neutral-600 leading-relaxed">
                บริษัท พี.เอส. มีเดียส์ ซัพพลาย จำกัด
                เป็นผู้ผลิตที่เชี่ยวชาญด้านการรับออกแบบและจัดพิมพ์แบบฟอร์มต่อเนื่อง
                บนกระดาษคอมพิวเตอร์ทุกขนาด ด้วยประสบการณ์ยาวนาน
                เรามุ่งมั่นส่งมอบงานพิมพ์คุณภาพสูงที่ตอบโจทย์ธุรกิจของลูกค้า
              </p>
              <p className="mt-4 text-neutral-600 leading-relaxed">
                ไม่ว่าจะเป็นงานพิมพ์คอมพิวเตอร์ฟอร์ม งานพิมพ์ออฟเซ็ท
                สติ๊กเกอร์ หรืองานเคลือบลามิเนต งานเจาะเว้นช่องหน้าต่าง
                เราพร้อมให้บริการด้วยทีมงานมืออาชีพ
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="bg-primary-light/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-primary">20+</p>
                  <p className="text-sm text-neutral-600 mt-1">ปีประสบการณ์</p>
                </div>
                <div className="bg-secondary-light/50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-secondary-dark">1,000+</p>
                  <p className="text-sm text-neutral-600 mt-1">ลูกค้าที่ไว้วางใจ</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl aspect-square lg:aspect-[4/3] flex items-center justify-center overflow-hidden border border-neutral-100 shadow-sm">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                    </svg>
                  </div>
                  <p className="text-neutral-800 font-bold text-lg">P.S. MEDIAS SUPPLY</p>
                  <p className="text-neutral-500 text-sm mt-1">รับรองคุณภาพและผลงาน</p>
                  <p className="text-secondary font-medium text-sm mt-3">แบบฟอร์มมีมาตรฐาน บริการเยี่ยม เปี่ยมคุณภาพ</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">
              ทำไมต้องเลือกเรา
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900">
              งานดีมีคุณภาพ ซื่อสัตย์ ตรงต่อเวลา ราคายุติธรรม
            </h2>
            <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
              ความไว้วางใจจากลูกค้ากว่า 1,000 ราย เป็นเครื่องยืนยันคุณภาพของเรา
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-50 rounded-2xl p-6 lg:p-8 border border-neutral-100 hover:shadow-lg hover:border-primary/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Products showcase */}
      <section className="py-16 lg:py-24 bg-neutral-50" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll animation="fade-up">
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                ผลงานของเรา
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900">
                ตัวอย่างผลิตภัณฑ์
              </h2>
              <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
                งานพิมพ์คุณภาพจากลูกค้าที่ไว้วางใจเรา
              </p>
            </div>
          </AnimateOnScroll>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {[
              { name: "ใบเสร็จรับเงิน", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
              { name: "ใบกำกับภาษี", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
              { name: "อินวอยซ์ (Invoice)", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
              { name: "ใบส่งของ", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { name: "สติ๊กเกอร์สินค้า", icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A2 2 0 013 12V7a4 4 0 014-4z" },
              { name: "โบรชัวร์", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
              { name: "กล่องบรรจุภัณฑ์", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
              { name: "ใบจ่ายเงินเดือน", icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" },
            ].map((item, index) => (
              <AnimateOnScroll key={index} animation="scale-in" delay={index * 60}>
                <div className="bg-white rounded-2xl aspect-square flex items-center justify-center hover:bg-primary-light/30 transition-colors group cursor-pointer border border-neutral-100 shadow-sm">
                  <div className="text-center p-4">
                    <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 group-hover:shadow-md transition-all">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                      </svg>
                    </div>
                    <p className="text-neutral-600 text-sm font-medium">{item.name}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section id="quote" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimateOnScroll animation="fade-right">
              <div>
                <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                  ขอใบเสนอราคา
                </span>
                <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
                  รับใบเสนอราคาฟรี
                </h2>
                <p className="text-neutral-600 leading-relaxed mb-8">
                  กรอกข้อมูลด้านล่าง เราจะติดต่อกลับพร้อมใบเสนอราคาภายใน 24 ชั่วโมง
                  ไม่มีค่าใช้จ่ายในการเสนอราคา
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
                  <a
                    href="https://line.me/R/ti/p/@psmediassupply"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 bg-[#06C755] text-white rounded-xl font-semibold hover:brightness-110 transition-all text-sm mt-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" /></svg>
                    แชทผ่าน LINE
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left">
              <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-6 lg:p-8 shadow-sm">
                <QuoteForm />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-linear-to-br from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ต้องการงานพิมพ์? ติดต่อเราวันนี้
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            เรายินดีให้คำปรึกษาและเสนอราคาสำหรับงานพิมพ์ทุกประเภท ไม่มีค่าใช้จ่ายในการเสนอราคา
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-neutral-50 transition-colors shadow-lg"
            >
              ขอใบเสนอราคาฟรี
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:0819226779"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-neutral-900 font-semibold rounded-xl hover:bg-secondary-dark transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              โทร 081-922-6779
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

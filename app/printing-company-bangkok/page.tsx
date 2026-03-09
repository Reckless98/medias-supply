import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "โรงพิมพ์ นนทบุรี กรุงเทพ | P.S. MEDIAS SUPPLY บริการพิมพ์ครบวงจร",
  description:
    "โรงพิมพ์ P.S. MEDIAS SUPPLY นนทบุรี ใกล้กรุงเทพ บริการงานพิมพ์ครบวงจร คอมพิวเตอร์ฟอร์ม ออฟเซ็ท สติ๊กเกอร์ แบบฟอร์มธุรกิจ ประสบการณ์ 30+ ปี โทร 081-922-6779",
  keywords: ["โรงพิมพ์", "โรงพิมพ์นนทบุรี", "โรงพิมพ์กรุงเทพ", "โรงพิมพ์ใกล้ฉัน", "printing company bangkok"],
  openGraph: {
    title: "โรงพิมพ์ P.S. MEDIAS SUPPLY | บริการพิมพ์ครบวงจร",
    description: "โรงพิมพ์บริการพิมพ์ครบวงจร นนทบุรี ใกล้กรุงเทพ ประสบการณ์ 30+ ปี โทร 081-922-6779",
    type: "website",
    locale: "th_TH",
    url: "https://psmediassupply.com/printing-company-bangkok",
  },
  alternates: {
    canonical: "https://psmediassupply.com/printing-company-bangkok",
  },
};

export default function PrintingCompanyBangkokPage() {
  return (
    <LandingPage
      headline="โรงพิมพ์ P.S. MEDIAS SUPPLY บริการงานพิมพ์ครบวงจร"
      subheadline="โรงพิมพ์คุณภาพในนนทบุรี ใกล้กรุงเทพ ให้บริการงานพิมพ์ครบวงจรมากว่า 30 ปี คอมพิวเตอร์ฟอร์ม งานพิมพ์ออฟเซ็ท สติ๊กเกอร์ทุกชนิด แบบฟอร์มธุรกิจ กล่องบรรจุภัณฑ์ ฉลากสินค้า"
      keyword="โรงพิมพ์"
      description="P.S. MEDIAS SUPPLY CO., LTD. คือโรงพิมพ์ที่ให้บริการงานพิมพ์ครบวงจรมากว่า 30 ปี ตั้งอยู่ในนนทบุรี ใกล้กรุงเทพ เราให้บริการพิมพ์เอกสารธุรกิจ คอมพิวเตอร์ฟอร์ม กระดาษต่อเนื่อง สติ๊กเกอร์ ฉลากสินค้า กล่องบรรจุภัณฑ์ และงานพิมพ์ออฟเซ็ททุกชนิด ด้วยงานดีมีคุณภาพ ซื่อสัตย์ ตรงต่อเวลา ราคายุติธรรม"
      products={[
        { name: "งานพิมพ์คอมพิวเตอร์ฟอร์ม", description: "กระดาษต่อเนื่อง กระดาษเคมี NCR ใบเสร็จ ใบกำกับภาษี บิลทุกชนิด" },
        { name: "งานพิมพ์ออฟเซ็ท", description: "หนังสือ โบรชัวร์ สมุด ถุงกระดาษ กล่องบรรจุภัณฑ์ สีสันสดใส" },
        { name: "งานพิมพ์สติ๊กเกอร์", description: "สติ๊กเกอร์ม้วน สติ๊กเกอร์แผ่น ฉลากสินค้า ทนทาน กันน้ำ" },
        { name: "แบบฟอร์มธุรกิจ", description: "อินวอยซ์ ใบส่งของ ใบจ่ายเงินเดือน หนังสือรับรองหักภาษี" },
        { name: "บริการเสริม", description: "เคลือบลามิเนต ไดคัท งานเจาะ ปั๊มนูน ปั๊มฟอยล์" },
        { name: "ออกแบบและที่ปรึกษา", description: "บริการออกแบบสิ่งพิมพ์ ให้คำปรึกษาฟรี โดยทีมผู้เชี่ยวชาญ" },
      ]}
      benefits={[
        { title: "ประสบการณ์ 30+ ปี", description: "ดำเนินธุรกิจมากว่า 30 ปี ส่งมอบงานให้ลูกค้ามากกว่า 1,000 ราย" },
        { title: "งานดีมีคุณภาพ", description: "รับรองคุณภาพทุกงานพิมพ์ แบบฟอร์มมีมาตรฐาน เปี่ยมคุณภาพ" },
        { title: "ซื่อสัตย์ ตรงต่อเวลา", description: "ดำเนินธุรกิจด้วยความซื่อสัตย์ ส่งมอบงานตรงนัดหมาย" },
        { title: "ราคายุติธรรม", description: "ราคาเป็นกันเอง คุ้มค่าทุกบาท ไม่มีค่าบวกเพิ่ม" },
        { title: "เทคโนโลยีทันสมัย", description: "ใช้เครื่องพิมพ์และวัสดุที่ทันสมัย เพื่อผลงานที่ดีที่สุด" },
        { title: "ทำเลสะดวก", description: "ตั้งอยู่ในนนทบุรี ใกล้กรุงเทพ เดินทางสะดวก จัดส่งรวดเร็ว" },
      ]}
      relatedLinks={[
        { href: "/print-receipts", label: "พิมพ์ใบเสร็จ" },
        { href: "/print-invoices", label: "พิมพ์บิล" },
        { href: "/print-stickers", label: "พิมพ์สติ๊กเกอร์" },
        { href: "/print-packaging-box", label: "พิมพ์กล่องบรรจุภัณฑ์" },
        { href: "/continuous-form-printing", label: "พิมพ์กระดาษต่อเนื่อง" },
        { href: "/services/forms", label: "คอมพิวเตอร์ฟอร์ม" },
        { href: "/services/offset", label: "งานพิมพ์ออฟเซ็ท" },
        { href: "/contact", label: "ติดต่อเรา" },
      ]}
    />
  );
}

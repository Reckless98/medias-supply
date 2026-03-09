import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "พิมพ์บิลเล่ม | รับพิมพ์บิลเล่มทุกแบบ ราคาโรงงาน",
  description:
    "รับพิมพ์บิลเล่มทุกชนิด ใบเสร็จเล่ม ใบกำกับภาษีเล่ม ใบส่งของเล่ม กระดาษเคมี NCR 2-6 ชั้น เย็บกาว พิมพ์คมชัด ราคาประหยัด โทร 081-922-6779",
  keywords: ["พิมพ์บิลเล่ม", "บิลเล่ม", "ใบเสร็จเล่ม", "โรงพิมพ์บิลเล่ม", "พิมพ์บิล"],
  openGraph: {
    title: "พิมพ์บิลเล่ม | P.S. MEDIAS SUPPLY CO., LTD.",
    description: "รับพิมพ์บิลเล่มทุกชนิด กระดาษเคมี NCR ราคาประหยัด โทร 081-922-6779",
    type: "website",
    locale: "th_TH",
    url: "https://psmediassupply.com/bill-book-printing",
  },
  alternates: {
    canonical: "https://psmediassupply.com/bill-book-printing",
  },
};

export default function BillBookPrintingPage() {
  return (
    <LandingPage
      headline="รับพิมพ์บิลเล่ม ทุกแบบ ราคาโรงงาน"
      subheadline="บริการพิมพ์บิลเล่มคุณภาพสูง ใบเสร็จเล่ม ใบกำกับภาษีเล่ม ใบส่งของเล่ม กระดาษเคมี NCR 2-6 ชั้น เย็บเล่มเรียบร้อย พร้อม Running Number ออกแบบตามรูปแบบบริษัท"
      keyword="พิมพ์บิลเล่ม"
      description="บิลเล่มเป็นเอกสารที่จำเป็นสำหรับธุรกิจทุกประเภท ไม่ว่าจะเป็นร้านค้า บริษัท หรือธุรกิจขนาดเล็ก P.S. MEDIAS SUPPLY รับพิมพ์บิลเล่มทุกรูปแบบ กระดาษเคมี NCR คุณภาพสูง เย็บเล่มเรียบร้อย หมายเลข Running Number แม่นยำ พร้อมออกแบบตามรูปแบบเฉพาะของธุรกิจคุณ"
      products={[
        { name: "ใบเสร็จรับเงินเล่ม", description: "ใบเสร็จเย็บเล่ม กระดาษเคมี 2-6 ชั้น พร้อม Running Number สำหรับเขียนด้วยมือ" },
        { name: "ใบกำกับภาษีเล่ม", description: "ใบกำกับภาษีเย็บเล่ม ถูกต้องตามรูปแบบกรมสรรพากร พร้อมหมายเลขกำกับ" },
        { name: "ใบส่งของเล่ม", description: "บิลส่งของเย็บเล่ม สะดวกในการใช้งาน หลายสำเนาสำหรับแต่ละฝ่าย" },
        { name: "ใบแจ้งหนี้เล่ม", description: "ใบแจ้งหนี้เย็บเล่ม ออกแบบตามความต้องการ กระดาษเคมีคุณภาพสูง" },
        { name: "ใบวางบิลเล่ม", description: "บิลวางบิลเย็บเล่ม สำหรับเรียกเก็บเงินจากลูกค้า" },
        { name: "ใบเสนอราคาเล่ม", description: "ใบเสนอราคาเย็บเล่ม สำหรับธุรกิจที่ต้องออกใบเสนอราคาบ่อยครั้ง" },
      ]}
      benefits={[
        { title: "กระดาษเคมี NCR คุณภาพสูง", description: "ติดชัดทุกใบ สีไม่ซีดง่าย ทนทาน เก็บได้นาน" },
        { title: "เย็บเล่มเรียบร้อย", description: "เย็บกาวแน่นหนา ไม่หลุดง่าย ใช้งานสะดวก" },
        { title: "Running Number แม่นยำ", description: "หมายเลขกำกับไม่ซ้ำ เรียงลำดับถูกต้อง ตรวจสอบง่าย" },
        { title: "ออกแบบฟรี", description: "บริการออกแบบบิลเล่มตามรูปแบบบริษัทฟรี ไม่มีค่าใช้จ่ายเพิ่ม" },
        { title: "สั่งได้ทุกจำนวน", description: "รับสั่งพิมพ์ตั้งแต่จำนวนน้อย ไม่ต้องกังวลขั้นต่ำ" },
        { title: "ส่งตรงเวลา", description: "จัดส่งตรงตามนัดหมาย ลูกค้าวางใจได้" },
      ]}
      relatedLinks={[
        { href: "/print-receipts", label: "พิมพ์ใบเสร็จ" },
        { href: "/print-invoices", label: "พิมพ์บิล" },
        { href: "/print-tax-invoice", label: "พิมพ์ใบกำกับภาษี" },
        { href: "/business-form-printing", label: "แบบฟอร์มธุรกิจ" },
        { href: "/continuous-form-printing", label: "พิมพ์กระดาษต่อเนื่อง" },
        { href: "/contact", label: "ติดต่อเรา" },
      ]}
    />
  );
}

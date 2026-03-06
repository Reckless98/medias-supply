import type { Metadata } from "next";
import LandingPage from "@/components/LandingPage";

export const metadata: Metadata = {
  title: "พิมพ์กระดาษต่อเนื่อง | คอมพิวเตอร์ฟอร์ม กระดาษเคมี NCR",
  description:
    "รับพิมพ์กระดาษต่อเนื่องคอมพิวเตอร์ฟอร์ม 9\" x 11\" พิมพ์ 1-6 ชั้น กระดาษเคมี NCR กระดาษเคมีเปล่า Carbonless คุณภาพสูง โทร 081-922-6779",
  keywords: ["พิมพ์กระดาษต่อเนื่อง", "คอมพิวเตอร์ฟอร์ม", "กระดาษเคมี", "กระดาษต่อเนื่อง", "Carbonless paper"],
  openGraph: {
    title: "พิมพ์กระดาษต่อเนื่อง | P.S. MEDIAS SUPPLY CO., LTD.",
    description: "รับพิมพ์กระดาษต่อเนื่อง คอมพิวเตอร์ฟอร์ม กระดาษเคมี NCR โทร 081-922-6779",
    type: "website",
    locale: "th_TH",
    url: "https://psmediassupply.com/continuous-form-printing",
  },
};

export default function ContinuousFormPrintingPage() {
  return (
    <LandingPage
      headline="รับพิมพ์กระดาษต่อเนื่อง คอมพิวเตอร์ฟอร์ม คุณภาพสูง"
      subheadline={'บริการพิมพ์กระดาษต่อเนื่อง (Continuous Form) สำหรับเครื่องปริ้นเตอร์ Dot Matrix ขนาด 9" x 11" พิมพ์ 1-6 ชั้น กระดาษเคมี NCR คุณภาพเกรด A พร้อมกระดาษเคมีเปล่า Carbonless 2-7 ชั้น'}
      keyword="พิมพ์กระดาษต่อเนื่อง"
      description={'P.S. MEDIAS SUPPLY เชี่ยวชาญด้านการพิมพ์กระดาษต่อเนื่องคอมพิวเตอร์ฟอร์มมากว่า 20 ปี เรารับพิมพ์แบบฟอร์มต่อเนื่องทุกขนาด ทั้งขนาดมาตรฐาน 9" x 11" และขนาดพิเศษตามความต้องการ ด้วยกระดาษเคมี NCR คุณภาพเกรด A ติดชัดทุกใบ สีไม่ซีด ทนทาน'}
      products={[
        { name: 'กระดาษต่อเนื่อง 9" x 11"', description: "ขนาดมาตรฐานสำหรับเครื่อง Dot Matrix พิมพ์ 1-4 ชั้น กระดาษเคมี NCR" },
        { name: "กระดาษเคมีเปล่า (Blank Carbonless)", description: "กระดาษเคมีเปล่า Carbonless 2-7 ชั้น สำหรับพิมพ์จากคอมพิวเตอร์โดยตรง" },
        { name: "แบบฟอร์มต่อเนื่องพิมพ์ลาย", description: "แบบฟอร์มต่อเนื่องพิมพ์ลายตามรูปแบบบริษัท พร้อมโลโก้และข้อมูล" },
        { name: "กระดาษต่อเนื่องขนาดพิเศษ", description: "รับพิมพ์กระดาษต่อเนื่องขนาดพิเศษ นอกเหนือจากขนาดมาตรฐาน" },
        { name: "กระดาษต่อเนื่องหลายสี", description: "พิมพ์ได้ทั้งสีเดียวและหลายสี สีสันสดใส อ่านง่าย" },
        { name: "กระดาษต่อเนื่องแบบมีเส้น", description: "กระดาษต่อเนื่องสำหรับงานบัญชี มีเส้นตาราง สะดวกในการใช้งาน" },
      ]}
      benefits={[
        { title: "กระดาษเคมีเกรด A", description: "ใช้กระดาษ Carbonless NCR คุณภาพสูงสุด ติดชัดทุกใบ สีไม่ซีด" },
        { title: "พิมพ์ได้ 1-6 ชั้น", description: "เลือกจำนวนชั้นได้ตามต้องการ สูงสุด 6 ชั้น ติดชัดทุกชั้น" },
        { title: "กระดาษเคมีต่างสี", description: "แต่ละชั้นมีสีต่างกัน ง่ายต่อการแยกเอกสาร ไม่ปนกัน" },
        { title: 'ขนาดมาตรฐาน 9" x 11"', description: "ใช้ได้กับเครื่อง Dot Matrix ทุกรุ่น ไม่ว่าจะปากแคบหรือปากกว้าง" },
        { title: "Running Number แม่นยำ", description: "หมายเลขกำกับไม่ซ้ำ แม่นยำ สะดวกในการตรวจสอบ" },
        { title: "ส่งตรงเวลา", description: "ส่งมอบตรงนัดหมาย ไม่ทำให้ธุรกิจหยุดชะงัก" },
      ]}
      relatedLinks={[
        { href: "/print-receipts", label: "พิมพ์ใบเสร็จ" },
        { href: "/print-invoices", label: "พิมพ์บิล" },
        { href: "/print-tax-invoice", label: "พิมพ์ใบกำกับภาษี" },
        { href: "/business-form-printing", label: "แบบฟอร์มธุรกิจ" },
        { href: "/services/forms", label: "คอมพิวเตอร์ฟอร์ม" },
        { href: "/contact", label: "ติดต่อเรา" },
      ]}
    />
  );
}

"use client";

import { useState, type FormEvent } from "react";

const LINE_OA_ID = "@p.s.mediasupply";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `สวัสดีครับ/ค่ะ\nชื่อ: ${formData.name}\nเบอร์โทร: ${formData.phone}\nรายละเอียด: ${formData.message}`;
    const url = `https://line.me/R/oaMessage/${LINE_OA_ID}/?${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
      <div className="bg-[#06C755]/5 border border-[#06C755]/20 rounded-xl px-4 py-3 flex items-start gap-3">
        <svg className="w-5 h-5 text-[#06C755] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        <p className="text-sm text-[#06C755]/90">
          กรอกข้อมูลด้านล่าง แล้วกด &quot;ส่งข้อความผ่าน LINE&quot; ระบบจะเปิด LINE พร้อมข้อความอัตโนมัติ
        </p>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-neutral-700 mb-1.5"
        >
          ชื่อ-นามสกุล <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          id="name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#06C755] focus:ring-2 focus:ring-[#06C755]/20 outline-none transition-all text-sm bg-white"
          placeholder="กรุณากรอกชื่อ-นามสกุล"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-neutral-700 mb-1.5"
        >
          เบอร์โทรศัพท์ <span className="text-primary">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#06C755] focus:ring-2 focus:ring-[#06C755]/20 outline-none transition-all text-sm bg-white"
          placeholder="เช่น 081-234-5678"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-neutral-700 mb-1.5"
        >
          รายละเอียดงานพิมพ์ <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#06C755] focus:ring-2 focus:ring-[#06C755]/20 outline-none transition-all text-sm bg-white resize-none"
          placeholder="กรุณาระบุรายละเอียดงานพิมพ์ที่ต้องการ เช่น ประเภทงาน จำนวน ขนาด ฯลฯ"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-[#06C755] text-white font-semibold rounded-xl hover:bg-[#05b34c] transition-all duration-300 shadow-lg shadow-[#06C755]/25 hover:shadow-xl hover:shadow-[#06C755]/30 hover:-translate-y-0.5 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386a.63.63 0 01-.63-.629V8.108a.63.63 0 01.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016a.63.63 0 01-.63.629.626.626 0 01-.51-.262l-2.397-3.274v2.906a.63.63 0 01-.629.63.63.63 0 01-.63-.63V8.108a.63.63 0 01.63-.63c.2 0 .385.096.504.259l2.397 3.274V8.108a.63.63 0 011.265 0v4.771zm-5.741 0a.63.63 0 01-1.26 0V8.108a.63.63 0 011.26 0v4.771zm-2.451.63H4.932a.63.63 0 01-.63-.63V8.108a.63.63 0 011.261 0v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.63-.629.63M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
        </svg>
        ส่งข้อความผ่าน LINE
      </button>
    </form>
  );
}

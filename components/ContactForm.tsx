"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
          ✓ ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด
        </div>
      )}

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
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
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
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
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
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white resize-none"
          placeholder="กรุณาระบุรายละเอียดงานพิมพ์ที่ต้องการ เช่น ประเภทงาน จำนวน ขนาด ฯลฯ"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
      >
        ส่งข้อความ
      </button>
    </form>
  );
}

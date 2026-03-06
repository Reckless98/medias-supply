"use client";

import { useState, type FormEvent } from "react";

const serviceOptions = [
  "พิมพ์ใบเสร็จรับเงิน",
  "พิมพ์ใบกำกับภาษี",
  "พิมพ์บิล / ใบแจ้งหนี้",
  "พิมพ์กระดาษต่อเนื่อง",
  "พิมพ์สติ๊กเกอร์ / ฉลากสินค้า",
  "พิมพ์กล่องบรรจุภัณฑ์",
  "พิมพ์ออฟเซ็ท",
  "แบบฟอร์มธุรกิจ",
  "อื่นๆ",
];

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    service: "",
    quantity: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Quote form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: "", company: "", phone: "", service: "", quantity: "", details: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" id="quote-form-fields">
      {submitted && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm">
          ✓ ส่งคำขอใบเสนอราคาเรียบร้อยแล้ว เราจะติดต่อกลับภายใน 24 ชั่วโมง
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="q-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
            ชื่อ-นามสกุล <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="q-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
            placeholder="ชื่อผู้ติดต่อ"
          />
        </div>
        <div>
          <label htmlFor="q-company" className="block text-sm font-medium text-neutral-700 mb-1.5">
            ชื่อบริษัท / ร้านค้า
          </label>
          <input
            type="text"
            id="q-company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
            placeholder="ชื่อบริษัท (ถ้ามี)"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="q-phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
            เบอร์โทรศัพท์ <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            id="q-phone"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
            placeholder="เช่น 081-234-5678"
          />
        </div>
        <div>
          <label htmlFor="q-service" className="block text-sm font-medium text-neutral-700 mb-1.5">
            ประเภทงานพิมพ์ <span className="text-primary">*</span>
          </label>
          <select
            id="q-service"
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
          >
            <option value="">เลือกประเภทงาน</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="q-quantity" className="block text-sm font-medium text-neutral-700 mb-1.5">
          จำนวนที่ต้องการ
        </label>
        <input
          type="text"
          id="q-quantity"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
          placeholder="เช่น 1,000 ชุด, 5,000 ดวง"
        />
      </div>

      <div>
        <label htmlFor="q-details" className="block text-sm font-medium text-neutral-700 mb-1.5">
          รายละเอียดเพิ่มเติม
        </label>
        <textarea
          id="q-details"
          rows={3}
          value={formData.details}
          onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white resize-none"
          placeholder="ขนาด จำนวนชั้น สี หรือรายละเอียดอื่นๆ"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
      >
        ขอใบเสนอราคาฟรี
      </button>

      <p className="text-xs text-neutral-400 text-center">
        ไม่มีค่าใช้จ่ายในการเสนอราคา • ตอบกลับภายใน 24 ชั่วโมง
      </p>
    </form>
  );
}

# Copilot Instructions for P.S. MEDIAS SUPPLY Website

You are a senior full-stack engineer and UI/UX designer.

Your task is to generate a COMPLETE modern website using:

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Responsive design
- Production-ready code

The site is an informational business website for a Thai printing company.

## Company

**P.S. MEDIAS SUPPLY CO., LTD.**
Printing services in Thailand.

The website must be modern, clean, fast, and professional.

## IMPORTANT RULES

1. Output COMPLETE FILES.
2. Do not truncate code.
3. Show the full project structure.
4. All text content must be written in Thai.
5. Use TailwindCSS styling.
6. Make the UI look modern and premium.
7. Mobile first responsive design.
8. Include placeholder images for printing examples.
9. Use modern typography and spacing.
10. Optimize for SEO.

## PROJECT STRUCTURE

```
app/
  layout.tsx
  page.tsx
  services/
    invoice/page.tsx
    stickers/page.tsx
    forms/page.tsx
    offset/page.tsx
  contact/page.tsx

components/
  Navbar.tsx
  Footer.tsx
  Hero.tsx
  ServiceCard.tsx
  ContactForm.tsx

styles/
  globals.css
```

## DESIGN STYLE

The design should feel like:

- Modern printing company
- Clean corporate Thai business style

Colors inspired by brochure:

- **primary:** red
- **secondary:** yellow
- **neutral:** white

Add:

- Soft shadows
- Rounded cards
- Clean typography
- Large hero banner

## PAGES

### HOME

Hero section:
- Headline in Thai describing printing services
- Example: "บริการงานพิมพ์ครบวงจร สำหรับธุรกิจของคุณ"
- Subtext explaining services

Sections:
- Company introduction
- Services grid
- Why choose us
- Contact CTA

### SERVICES

#### 1. Computer form printing
- ใบเสร็จรับเงิน
- ใบกำกับภาษี
- ใบวางบิล
- กระดาษต่อเนื่อง

#### 2. Offset printing
- หนังสือ
- โบรชัวร์
- สมุด
- ถุงกระดาษ
- กล่องบรรจุภัณฑ์

#### 3. Sticker printing
- สติ๊กเกอร์ม้วน
- สติ๊กเกอร์แผ่น
- ฉลากสินค้า

#### 4. Additional services
- เคลือบลามิเนต
- ไดคัท
- งานเจาะ

### CONTACT PAGE

Phone numbers:
- 081-922-6779
- 080-340-6923

Email: psmedia65@gmail.com

Contact form fields:
- name
- phone
- message

## NAVBAR

Logo text: **P.S. MEDIAS SUPPLY CO., LTD.**

Menu:
- หน้าแรก
- บริการ
- ผลงาน
- ติดต่อเรา

Sticky navbar.

## FOOTER

Include:
- Company name
- Contact info
- Copyright

## SEO

Metadata:
- title
- description
- keywords

Keywords:
- พิมพ์ใบเสร็จ
- พิมพ์บิล
- โรงพิมพ์
- สติ๊กเกอร์สินค้า
- พิมพ์กล่องบรรจุภัณฑ์

## UI COMPONENTS

Reusable components:
- ServiceCard (icon, title, description)
- Hero (headline, subheadline, CTA button)
- ContactForm

## HERO SECTION

Large hero banner with:
- headline
- subheadline
- CTA button: "ขอใบเสนอราคา"

## CONTACT CTA

Section text: "ต้องการงานพิมพ์? ติดต่อเราวันนี้"
Button scrolls to contact form.

## EXTRA FEATURES

- Smooth scrolling
- Hover animations
- SEO meta tags
- OpenGraph tags
- Good accessibility

## DELIVERABLE

Generate:
1. Full project tree
2. Every file
3. All code
4. Ready to run with `npm install && npm run dev`

**DO NOT EXPLAIN. ONLY OUTPUT CODE.**

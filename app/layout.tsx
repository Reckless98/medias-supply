import type { Metadata } from "next";
import { Noto_Sans_Thai, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import "@/styles/globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psmediassupply.com"),
  title: {
    default:
      "P.S. MEDIAS SUPPLY CO., LTD. | โรงพิมพ์ บริการงานพิมพ์ครบวงจร พิมพ์แบบฟอร์ม สติ๊กเกอร์ ออฟเซ็ท",
    template: "%s | P.S. MEDIAS SUPPLY CO., LTD.",
  },
  description:
    "บริษัท พี.เอส. มีเดียส์ ซัพพลาย จำกัด โรงพิมพ์บริการงานพิมพ์ครบวงจร คอมพิวเตอร์ฟอร์ม พิมพ์ใบเสร็จ ใบกำกับภาษี ใบวางบิล สติ๊กเกอร์สินค้า งานพิมพ์ออฟเซ็ท กล่องบรรจุภัณฑ์ กระดาษต่อเนื่อง กระดาษเคมี งานดีมีคุณภาพ ราคายุติธรรม โทร 081-922-6779",
  keywords: [
    "พิมพ์ใบเสร็จ",
    "พิมพ์บิล",
    "พิมพ์ใบกำกับภาษี",
    "โรงพิมพ์",
    "พิมพ์สติ๊กเกอร์สินค้า",
    "พิมพ์กล่องบรรจุภัณฑ์",
    "คอมพิวเตอร์ฟอร์ม",
    "งานพิมพ์ออฟเซ็ท",
    "ใบกำกับภาษี",
    "ใบเสร็จรับเงิน",
    "กระดาษต่อเนื่อง",
    "กระดาษเคมี",
    "สติ๊กเกอร์ม้วน",
    "ฉลากสินค้า",
    "แบบฟอร์มธุรกิจ",
    "P.S. MEDIAS SUPPLY",
  ],
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://psmediassupply.com",
    siteName: "P.S. MEDIAS SUPPLY CO., LTD.",
    title: "P.S. MEDIAS SUPPLY CO., LTD. | โรงพิมพ์บริการงานพิมพ์ครบวงจร",
    description:
      "รับงานพิมพ์ คอมพิวเตอร์ฟอร์ม ออฟเซ็ท สติ๊กเกอร์ แบบฟอร์มธุรกิจ งานดีมีคุณภาพ ซื่อสัตย์ ตรงต่อเวลา ราคายุติธรรม โทร 081-922-6779",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "P.S. MEDIAS SUPPLY CO., LTD. - โรงพิมพ์บริการงานพิมพ์ครบวงจร",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://psmediassupply.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://psmediassupply.com/#organization",
  name: "P.S. MEDIAS SUPPLY CO., LTD.",
  alternateName: "บริษัท พี.เอส. มีเดียส์ ซัพพลาย จำกัด",
  description:
    "โรงพิมพ์บริการงานพิมพ์ครบวงจร คอมพิวเตอร์ฟอร์ม ออฟเซ็ท สติ๊กเกอร์ แบบฟอร์มธุรกิจ ใบเสร็จรับเงิน ใบกำกับภาษี กล่องบรรจุภัณฑ์ ประสบการณ์กว่า 30 ปี",
  url: "https://psmediassupply.com",
  telephone: ["+66819226779", "+66803406923"],
  email: "psmedia65@gmail.com",
  image: "https://psmediassupply.com/og-image.jpg",
  logo: "https://psmediassupply.com/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "68 ซอยงามวงศ์วาน 18 แยก 6/7",
    addressLocality: "บางเขน",
    addressRegion: "นนทบุรี",
    postalCode: "11000",
    addressCountry: "TH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.8622,
    longitude: 100.5134,
  },
  areaServed: {
    "@type": "Country",
    name: "Thailand",
  },
  priceRange: "$$",
  currenciesAccepted: "THB",
  paymentAccepted: "Cash, Bank Transfer",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "บริการงานพิมพ์",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "งานพิมพ์คอมพิวเตอร์ฟอร์ม",
          description: "พิมพ์กระดาษต่อเนื่อง ใบเสร็จรับเงิน ใบกำกับภาษี ใบวางบิล กระดาษเคมี NCR",
          url: "https://psmediassupply.com/services/forms",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "งานพิมพ์ออฟเซ็ท",
          description: "พิมพ์หนังสือ โบรชัวร์ สมุด ถุงกระดาษ กล่องบรรจุภัณฑ์ เคลือบลามิเนต",
          url: "https://psmediassupply.com/services/offset",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "งานพิมพ์สติ๊กเกอร์",
          description: "สติ๊กเกอร์ม้วน สติ๊กเกอร์แผ่น ฉลากสินค้า ทนทาน สีสันสดใส",
          url: "https://psmediassupply.com/services/stickers",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "แบบฟอร์มธุรกิจ",
          description: "อินวอยซ์ ใบเสร็จ ใบกำกับภาษี ใบส่งของ ใบจ่ายเงินเดือน หนังสือรับรองหักภาษี",
          url: "https://psmediassupply.com/services/invoice",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${notoSansThai.variable} ${inter.variable} antialiased font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyContact />
      </body>
    </html>
  );
}

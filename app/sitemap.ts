import type { MetadataRoute } from "next";

const BASE_URL = "https://psmediassupply.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/contact",
    "/portfolio",
    "/services/forms",
    "/services/invoice",
    "/services/offset",
    "/services/stickers",
    "/print-receipts",
    "/print-invoices",
    "/print-tax-invoice",
    "/print-stickers",
    "/print-product-labels",
    "/print-packaging-box",
    "/continuous-form-printing",
    "/bill-book-printing",
    "/business-form-printing",
    "/printing-company-bangkok",
    "/blog",
    "/blog/how-to-print-receipt-books",
    "/blog/difference-between-invoice-and-tax-invoice",
    "/blog/how-business-forms-work",
    "/blog/best-sticker-printing-for-products",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}

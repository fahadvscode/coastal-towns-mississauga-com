import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Analytics, GtmNoscript } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { LeadPopup } from "@/components/LeadPopup";
import { siteOrganizationSchema, websiteSchema } from "@/lib/schema";
import { PAGE_META, SITE_NAME, SITE_URL } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#1C5F73",
};

const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const bingVerification = process.env.NEXT_PUBLIC_BING_VERIFICATION;
const hasGsc = Boolean(gscVerification && !gscVerification.startsWith("PLACEHOLDER"));
const hasBing = Boolean(bingVerification && !bingVerification.startsWith("PLACEHOLDER"));

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata(PAGE_META.home),
  title: {
    default: PAGE_META.home.title,
    template: "%s",
  },
  applicationName: SITE_NAME,
  manifest: "/site.webmanifest",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: [
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  ...(hasGsc || hasBing
    ? {
        verification: {
          ...(hasGsc ? { google: gscVerification } : {}),
          ...(hasBing ? { other: { "msvalidate.01": bingVerification as string } } : {}),
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${sora.variable} ${inter.variable}`}>
      <head>
        {hasGsc ? <meta name="google-site-verification" content={gscVerification} /> : null}
        {hasBing ? <meta name="msvalidate.01" content={bingVerification} /> : null}
        <meta name="theme-color" content="#1C5F73" />
        <link rel="icon" href="/icon-48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <GtmNoscript />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={websiteSchema()} />
        <JsonLd data={siteOrganizationSchema()} />
        <Nav />
        <main id="main" className="flex-1 pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
        <LeadPopup />
        <Analytics />
      </body>
    </html>
  );
}

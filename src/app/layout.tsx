import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mobilecare.sk"),
  title: {
    default: "Mobilecare | Apple iPhone, iPad, MacBook, AirPods & Accessories",
    template: "%s | Mobilecare",
  },
  description:
    "Discover premium Apple products at Mobilecare — iPhone, iPad, MacBook, AirPods, and original accessories. Fast shipping, fair prices, and reliable service.",
  keywords: [
    "Mobilecare",
    "Apple store",
    "iPhone",
    "iPad",
    "MacBook",
    "AirPods",
    "Apple Watch",
    "Accessories",
    "Apple service",
    "Apple deals",
    "Apple sale",
  ],
  authors: [{ name: "Mobilecare Team", url: "https://www.mobilecare.sk" }],
  creator: "Mobilecare",
  publisher: "Mobilecare",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mobilecare.sk",
    siteName: "Mobilecare",
    title: "Mobilecare — Premium Apple Products & Accessories",
    description:
      "Shop iPhone, iPad, MacBook, AirPods, and genuine accessories. Fast delivery and trusted support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobilecare — Apple iPhone, iPad, MacBook, AirPods",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobilecare — Premium Apple Store",
    description:
      "Premium Apple products and accessories. Fast shipping. Trusted service.",
    images: ["/og-image.jpg"],
    creator: "@mobilecare",
  },
  alternates: {
    canonical: "https://www.mobilecare.sk",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${inter.variable} `}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

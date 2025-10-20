import "@/app/globals.css";
import type { ReactNode } from "react";
import Providers from "@/app/providers";
import AppHeader from "@/components/layouts/AppHeader";
import Footer from "@/components/layouts/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="sk">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <AppHeader />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

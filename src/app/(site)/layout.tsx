import "@/app/globals.css";
import type { ReactNode } from "react";
import Providers from "@/app/providers";
import AppHeader from "@/components/layouts/AppHeader";
import Footer from "@/components/layouts/Footer";
import CategorySidebar from "@/components/sidebar/CategorySidebar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <AppHeader />
      <CategorySidebar />
      <main className="flex-1">{children}</main>
      <Footer />
    </Providers>
  );
}

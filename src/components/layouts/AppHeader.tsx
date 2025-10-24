"use client";
import MainNav from "./MainNav";
import CartDrawer from "./CartDrawer";
import MainHeader from "./MainHeader";
import StoreInfoBar from "./StoreInfoBar";
import TopContactBar from "./TopContactBar";
import TopAnnouncementBar from "./TopAnnouncementBar";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 shadow-[0_1px_0_rgba(255,255,255,0.06)]">
      <TopContactBar />
      <StoreInfoBar />
      <TopAnnouncementBar />
      <div className="bg-black">
        <MainHeader />
        <MainNav />
      </div>
      <CartDrawer />
    </header>
  );
}

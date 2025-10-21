// "use client";

// import Link from "next/link";
// import { Search, ShoppingCart, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useSidebar } from "@/context/SidebarContext";
// import { useCart } from "@/context/CartContext";

// export default function AppHeader() {
//   const { openSidebar } = useSidebar();
//   const { openCart, items } = useCart();

//   // top nav items; "sidebar" opens the 3-level category sheet
//   const navItems: Array<
//     | { label: string; action: "sidebar" }
//     | { label: string; href: string }
//   > = [
//     { label: "Všetky kategórie", action: "sidebar" },
//     { label: "iPhone", href: "/category/iphone" },
//     { label: "iPad", href: "/category/ipad" },
//     { label: "MacBook", href: "/category/macbook" },
//     { label: "Apple Airpods", href: "/category/apple-airpods" },
//     { label: "Smarthome", href: "/category/smarthome" },
//     { label: "Príslušenstvo", href: "/category/prislusenstvo" },
//   ];

//   const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <header className="bg-background border-b border-border sticky top-0 z-40">
//       <div className="container mx-auto">
//         {/* ── Top row: logo • search • cart ───────────────────────────── */}
//         <div className="flex items-center justify-between py-4 gap-8">
//           {/* Logo → home */}
//           <Link href="/" className="flex items-center gap-2" aria-label="Domov">
//             <div className="font-bold text-2xl text-primary">mobilecare</div>
//           </Link>

//           {/* Search */}
//           <div className="flex-1 max-w-xl relative">
//             <Input
//               type="search"
//               placeholder="Zadajte názov produktu"
//               className="pl-10 pr-4"
//               aria-label="Zadajte názov produktu"
//             />
//             <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//           </div>

//           {/* Cart button */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="relative"
//             onClick={openCart}
//             aria-label="Otvoriť košík"
//           >
//             <ShoppingCart className="h-5 w-5" />
//             {cartCount > 0 && (
//               <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center font-semibold">
//                 {cartCount}
//               </span>
//             )}
//           </Button>
//         </div>

//         {/* ── Second row: nav ─────────────────────────────────────────── */}
//         <nav className="flex items-center gap-1 pb-3 border-t border-border pt-3">
//           {navItems.map((item) =>
//             "action" in item ? (
//               <Button
//                 key={item.label}
//                 variant="ghost"
//                 onClick={openSidebar}
//                 className="gap-2"
//               >
//                 <Menu className="h-4 w-4" />
//                 {item.label}
//               </Button>
//             ) : (
//               <Button key={item.label} variant="ghost" asChild>
//                 <Link href={item.href}>{item.label}</Link>
//               </Button>
//             )
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// }

"use client";

import TopContactBar from "./TopContactBar";
import TopAnnouncementBar from "./TopAnnouncementBar";
import MainHeader from "./MainHeader";
import MainNav from "./MainNav";
import CartDrawer from "./CartDrawer";
import StoreInfoBar from "./StoreInfoBar";

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

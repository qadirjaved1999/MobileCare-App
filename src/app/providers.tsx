"use client";

import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { SidebarProvider } from "@/context/SidebarContext";
import { FilterProvider } from "@/context/FilterContext";
import { CartProvider } from "@/context/CartContext";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SidebarProvider>
          <FilterProvider>
            <CartProvider>
              {children}
              <Toaster />
              <Sonner />
            </CartProvider>
          </FilterProvider>
        </SidebarProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

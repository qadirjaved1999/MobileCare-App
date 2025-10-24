"use client";
import { Toaster } from "sonner";
import { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import { FilterProvider } from "@/context/FilterContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { SidebarProvider } from "@/context/SidebarContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

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

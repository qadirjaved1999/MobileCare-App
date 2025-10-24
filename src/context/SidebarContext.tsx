"use client";
import React, { createContext, useContext, useState, useCallback } from "react";

// __________Types__________
export type SidebarContextType = {
  open: boolean;
  setOpen: (v: boolean) => void;
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;

  isCategoryMode: boolean;
  setCategoryMode: (v: boolean) => void;

  activeParent: string | null;
  activeChild: string | null;
  activeSubChild: string | null;
  setActiveParent: (id: string | null) => void;
  setActiveChild: (id: string | null) => void;
  setActiveSubChild: (id: string | null) => void;
};

// __________Context__________
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

// __________Provider__________
export function SidebarProvider({ children }: { children: React.ReactNode }) {
  // Sheet open/close
  const [open, setOpen] = useState(false);

  // Mode: true = categories, false = filters
  const [isCategoryMode, setCategoryMode] = useState(true);

  // Active selections for 3-level nav
  const [activeParent, setActiveParent] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);
  const [activeSubChild, setActiveSubChild] = useState<string | null>(null);

  // Open / close handlers
  const openSidebar = useCallback(() => setOpen(true), []);
  const closeSidebar = useCallback(() => {
    setOpen(false);
    // Reset selection after close delay
    setTimeout(() => {
      setActiveParent(null);
      setActiveChild(null);
      setActiveSubChild(null);
    }, 200);
  }, []);

  // Context value
  const value: SidebarContextType = {
    open,
    setOpen,
    isOpen: open,
    openSidebar,
    closeSidebar,
    isCategoryMode,
    setCategoryMode,
    activeParent,
    activeChild,
    activeSubChild,
    setActiveParent,
    setActiveChild,
    setActiveSubChild,
  };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

// __________Hook__________
export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
}

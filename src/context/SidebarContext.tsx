"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

export type SidebarContextType = {
  /** Sheet open/close (two names for compatibility) */
  open: boolean;
  setOpen: (v: boolean) => void;
  isOpen: boolean;                 // alias of `open`
  openSidebar: () => void;
  closeSidebar: () => void;

  /** Which content the left sheet shows: categories vs filters */
  isCategoryMode: boolean;
  setCategoryMode: (v: boolean) => void;

  /** Active selections for the 3-level menu */
  activeParent: string | null;
  activeChild: string | null;
  activeSubChild: string | null;
  setActiveParent: (id: string | null) => void;
  setActiveChild: (id: string | null) => void;
  setActiveSubChild: (id: string | null) => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  // drawer open state
  const [open, setOpen] = useState(false);
  // mode: true => categories, false => filters
  const [isCategoryMode, setCategoryMode] = useState(true);

  // active nodes for columns
  const [activeParent, setActiveParent] = useState<string | null>(null);
  const [activeChild, setActiveChild] = useState<string | null>(null);
  const [activeSubChild, setActiveSubChild] = useState<string | null>(null);

  const openSidebar = useCallback(() => setOpen(true), []);
  const closeSidebar = useCallback(() => {
    setOpen(false);
    // optional: reset selections after close anim
    setTimeout(() => {
      setActiveParent(null);
      setActiveChild(null);
      setActiveSubChild(null);
    }, 200);
  }, []);

  const value: SidebarContextType = {
    // open helpers
    open,
    setOpen,
    isOpen: open,
    openSidebar,
    closeSidebar,

    // mode
    isCategoryMode,
    setCategoryMode,

    // selections
    activeParent,
    activeChild,
    activeSubChild,
    setActiveParent,
    setActiveChild,
    setActiveSubChild,
  };

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
}

export function useSidebar() {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar must be used within SidebarProvider");
  return ctx;
}

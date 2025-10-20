"use client";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import type { FilterState } from "@/lib/types"; // adjust the import path if needed

/* ---------------------------------------------
   🎛 FilterContext
   Handles filter drawer (open/close) and all filter selections.
   Persists filters to localStorage between visits.
----------------------------------------------*/
interface FilterContextType {
  isOpen: boolean;                     // filter sheet open/close
  openFilter: () => void;              // open sheet
  closeFilter: () => void;             // close sheet
  filters: FilterState;                // current filter values
  setFilters: (filters: FilterState) => void;
  resetFilters: () => void;            // reset all filters to defaults
  resultCount: number;                 // number of matching products
  setResultCount: (count: number) => void;
}

/* Default values for all filters */
const defaultFilters: FilterState = {
  priceMin: 0,
  priceMax: 3000,
  brands: [],
  devices: [],
  models: [],
};

/* Create context */
const FilterContext = createContext<FilterContextType | undefined>(undefined);

/* ---------------------------------------------
   📦 Provider
   Wraps around the app to make filters available globally.
----------------------------------------------*/
export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Load filters from localStorage on mount (SSR-safe)
  const [filters, setFiltersState] = useState<FilterState>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("mobilecare-filters");
        return saved ? (JSON.parse(saved) as FilterState) : defaultFilters;
      } catch {
        return defaultFilters;
      }
    }
    return defaultFilters;
  });

  const [resultCount, setResultCount] = useState(1772);

  // 🧠 Save filters anytime they change (client only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mobilecare-filters", JSON.stringify(filters));
    }
  }, [filters]);

  /* ------- Actions ------- */
  const openFilter = useCallback(() => setIsOpen(true), []);
  const closeFilter = useCallback(() => setIsOpen(false), []);

  const setFilters = useCallback((newFilters: FilterState) => {
    setFiltersState(newFilters);
  }, []);

  const resetFilters = useCallback(() => {
    setFiltersState(defaultFilters);
    setResultCount(1772);
  }, []);

  return (
    <FilterContext.Provider
      value={{
        isOpen,
        openFilter,
        closeFilter,
        filters,
        setFilters,
        resetFilters,
        resultCount,
        setResultCount,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

/* ---------------------------------------------
   ⚡ Hook
   Access filter state & actions easily in any component.
----------------------------------------------*/
export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilter must be used within FilterProvider");
  return ctx;
}

"use client";
import {
  useState,
  useEffect,
  useContext,
  useCallback,
  createContext,
} from "react";
import type { FilterState } from "@/lib/types";

// __________Types__________
interface FilterContextType {
  isOpen: boolean;
  openFilter: () => void;
  closeFilter: () => void;
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
  resetFilters: () => void;
  resultCount: number;
  setResultCount: (count: number) => void;
}

// __________Defaults__________
const defaultFilters: FilterState = {
  priceMin: 0,
  priceMax: 3000,
  brands: [],
  devices: [],
  models: [],
};

// __________Context__________
const FilterContext = createContext<FilterContextType | undefined>(undefined);

// __________Provider__________
export function FilterProvider({ children }: { children: React.ReactNode }) {
  // UI state (sheet)
  const [isOpen, setIsOpen] = useState(false);

  // Filters (hydrate from storage)
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

  // Result counter (externally updated)
  const [resultCount, setResultCount] = useState(1772);

  // Persist filters on change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("mobilecare-filters", JSON.stringify(filters));
    }
  }, [filters]);

  // __________Actions__________
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

// __________Hook__________
export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilter must be used within FilterProvider");
  return ctx;
}

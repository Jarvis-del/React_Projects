import { useMemo } from "react";
import { ALL_PRODUCTS } from "../data/products";

/**
 * useFilteredProducts
 *
 * Returns the product list after applying all active filters and sort order.
 *
 * @param {{ gender: string, subCategory: string, brand: string, discount: string, sort: string }} filters
 * @param {string} searchQuery
 * @returns {import('../data/products').Product[]}
 */
export function useFilteredProducts(filters, searchQuery) {
  return useMemo(() => {
    const { gender, subCategory, brand, discount, sort } = filters;
    const q = searchQuery.toLowerCase();

    const filtered = ALL_PRODUCTS.filter((p) => {
      if (gender !== "All" && p.gender !== gender) return false;
      if (subCategory !== "All" && p.subCategory !== subCategory) return false;
      if (brand !== "All" && p.brand !== brand) return false;
      if (discount !== "All" && p.discount < parseInt(discount)) return false;
      if (
        q &&
        !p.name.toLowerCase().includes(q) &&
        !p.brand.toLowerCase().includes(q) &&
        !p.gender.toLowerCase().includes(q)
      )
        return false;
      return true;
    });

    return filtered.sort((a, b) => {
      if (sort === "price_asc")  return a.price - b.price;
      if (sort === "price_desc") return b.price - a.price;
      if (sort === "rating")     return b.rating - a.rating;
      if (sort === "discount")   return b.discount - a.discount;
      return 0; // relevance
    });
  }, [filters, searchQuery]);
}

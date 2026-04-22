import { useEffect, useReducer, useState } from "react";

import { reducer, initialState } from "./store/reducer";
import { useToast }              from "./hooks/useToast";
import { useFilteredProducts }   from "./hooks/useFilteredProducts";
import { GENDER_SUB_CATS }       from "./data/navigation";
import { BANNERS }               from "./data/banners";

import Navbar        from "./components/Navbar";
import ToastStack    from "./components/ToastStack";
import HomePage      from "./pages/HomePage";
import ProductsPage  from "./pages/ProductsPage";
import CartPage      from "./pages/CartPage";
import WishlistPage  from "./pages/WishlistPage";

/**
 * App
 *
 * Root component. Owns all global state (cart, wishlist, filters),
 * the page router, the hero carousel slide index, and the filter panel toggle.
 */
function App() {
  const [state, dispatch]       = useReducer(reducer, initialState);
  const [page, setPage]         = useState("home");
  const [slide, setSlide]       = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const { toasts, toast }       = useToast();

  // Auto-advance hero carousel
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % BANNERS.length), 4500);
    return () => clearInterval(t);
  }, []);

  // Navigate to products page with optional gender filter
  const goProducts = (gender = "All") => {
    dispatch({ type: "SET_FILTER", payload: { gender, subCategory: "All" } });
    setPage("products");
    setFilterOpen(false);
  };

  // Selector helpers (avoid re-creating on every render with inline checks)
  const inCart = (id) => state.cart.some((i) => i.id === id);
  const inWish = (id) => state.wishlist.some((i) => i.id === id);

  // Derived filtered + sorted product list
  const filtered = useFilteredProducts(state.filters, state.searchQuery);

  // Sub-category list that matches the current gender filter
  const subCats = GENDER_SUB_CATS[state.filters.gender] || GENDER_SUB_CATS["All"];

  return (
    <div>
      <ToastStack toasts={toasts} />

      <Navbar
        state={state}
        dispatch={dispatch}
        page={page}
        setPage={setPage}
        goProducts={goProducts}
      />

      {page === "home" && (
        <HomePage
          slide={slide}
          setSlide={setSlide}
          goProducts={goProducts}
          state={state}
          dispatch={dispatch}
          inCart={inCart}
          inWish={inWish}
          toast={toast}
        />
      )}

      {page === "products" && (
        <ProductsPage
          state={state}
          dispatch={dispatch}
          filtered={filtered}
          inCart={inCart}
          inWish={inWish}
          toast={toast}
          subCats={subCats}
          filterOpen={filterOpen}
          setFilterOpen={setFilterOpen}
        />
      )}

      {page === "cart" && (
        <CartPage state={state} dispatch={dispatch} setPage={setPage} />
      )}

      {page === "wishlist" && (
        <WishlistPage state={state} dispatch={dispatch} inCart={inCart} toast={toast} />
      )}
    </div>
  );
}

export default App;

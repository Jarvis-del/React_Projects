/**
 * store/reducer.js
 *
 * Central state management for the Myntra clone using useReducer.
 * Manages: cart, wishlist, product filters, search query.
 */

export const initialState = {
  cart: [],
  wishlist: [],
  filters: {
    gender: "All",
    subCategory: "All",
    brand: "All",
    discount: "All",
    sort: "relevance",
  },
  searchQuery: "",
};

/**
 * @param {typeof initialState} state
 * @param {{ type: string, payload?: any }} action
 */
export function reducer(state, action) {
  switch (action.type) {
    // ── Cart ────────────────────────────────────────────────────────────────
    case "ADD_TO_CART": {
      if (state.cart.find((i) => i.id === action.payload.id)) return state;
      return { ...state, cart: [...state.cart, action.payload] };
    }
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((i) => i.id !== action.payload) };

    // ── Wishlist ─────────────────────────────────────────────────────────────
    case "TOGGLE_WISHLIST": {
      const exists = state.wishlist.find((i) => i.id === action.payload.id);
      return {
        ...state,
        wishlist: exists
          ? state.wishlist.filter((i) => i.id !== action.payload.id)
          : [...state.wishlist, action.payload],
      };
    }

    // ── Filters & Search ─────────────────────────────────────────────────────
    case "SET_FILTER":
      return { ...state, filters: { ...state.filters, ...action.payload } };
    case "RESET_FILTERS":
      return { ...state, filters: initialState.filters };
    case "SET_SEARCH":
      return { ...state, searchQuery: action.payload };

    default:
      return state;
  }
}

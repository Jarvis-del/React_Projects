import { BagIcon, SearchIcon } from "../assets/icons/Icons";
import { NAV_LINKS } from "../data/navigation";

/**
 * Navbar
 *
 * Sticky top navigation with logo, category links, search bar,
 * wishlist icon, and bag icon with item count badge.
 *
 * @param {{
 *   state: object,
 *   dispatch: Function,
 *   page: string,
 *   setPage: Function,
 *   goProducts: Function
 * }} props
 */
function Navbar({ state, dispatch, page, setPage, goProducts }) {
  const handleSearch = (e) => {
    dispatch({ type: "SET_SEARCH", payload: e.target.value });
    if (e.target.value) {
      goProducts("All");
    } else {
      dispatch({ type: "SET_FILTER", payload: { gender: "All" } });
    }
  };

  return (
    <header
      style={{
        background: "#fff",
        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
        position: "sticky", top: 0, zIndex: 200,
      }}
    >
      <div
        style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 20px",
          height: 62, display: "flex", alignItems: "center", gap: 16,
        }}
      >
        {/* ── Logo ──────────────────────────────────────────── */}
        <span
          onClick={() => { setPage("home"); dispatch({ type: "RESET_FILTERS" }); }}
          style={{
            fontFamily: "Georgia,serif", fontSize: 30, fontWeight: 700,
            color: "#ff3f6c", cursor: "pointer", flexShrink: 0,
            letterSpacing: "-1px", userSelect: "none",
          }}
        >
          myntra
        </span>

        {/* ── Nav links ─────────────────────────────────────── */}
        <nav style={{ display: "flex", gap: 2, flex: 1 }}>
          {NAV_LINKS.map((link) => {
            const isStudio = link === "Studio";
            const isActive = !isStudio && state.filters.gender === link && page === "products";
            return (
              <button
                key={link}
                onClick={() => !isStudio && goProducts(link)}
                style={{
                  background: "none", border: "none",
                  cursor: isStudio ? "default" : "pointer",
                  fontSize: 14, fontWeight: 700,
                  color: isStudio ? "#ff3f6c" : isActive ? "#ff3f6c" : "#282c3f",
                  padding: "6px 10px", borderRadius: 4, whiteSpace: "nowrap",
                  borderBottom: isActive ? "2px solid #ff3f6c" : "2px solid transparent",
                  transition: "color 0.15s, background 0.15s",
                }}
                onMouseEnter={(e) => {
                  if (!isStudio) {
                    e.currentTarget.style.background = "#fff3f5";
                    e.currentTarget.style.color = "#ff3f6c";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isStudio) {
                    e.currentTarget.style.background = "none";
                    e.currentTarget.style.color = isActive ? "#ff3f6c" : "#282c3f";
                  }
                }}
              >
                {link}
              </button>
            );
          })}
        </nav>

        {/* ── Search bar ────────────────────────────────────── */}
        <div
          style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "#f5f5f6", border: "1px solid #eee",
            borderRadius: 4, padding: "7px 12px",
            flex: "0 0 260px",
          }}
        >
          <SearchIcon />
          <input
            placeholder="Search brands, products…"
            value={state.searchQuery}
            onChange={handleSearch}
            style={{
              border: "none", background: "transparent",
              fontSize: 13, color: "#282c3f", width: "100%",
            }}
          />
          {state.searchQuery && (
            <span
              onClick={() => dispatch({ type: "SET_SEARCH", payload: "" })}
              style={{ cursor: "pointer", color: "#999", fontSize: 16, lineHeight: 1 }}
            >
              ×
            </span>
          )}
        </div>

        {/* ── Wishlist ──────────────────────────────────────── */}
        <button
          onClick={() => setPage("wishlist")}
          style={{
            background: "none", border: "none", cursor: "pointer",
            textAlign: "center", color: "#282c3f", minWidth: 60,
          }}
        >
          <div style={{ fontSize: 20 }}>♡</div>
          <div style={{ fontSize: 11, marginTop: 1 }}>
            Wishlist {state.wishlist.length > 0 && `(${state.wishlist.length})`}
          </div>
        </button>

        {/* ── Bag ───────────────────────────────────────────── */}
        <button
          onClick={() => setPage("cart")}
          style={{
            background: "none", border: "none", cursor: "pointer",
            textAlign: "center", color: "#282c3f",
            position: "relative", minWidth: 50,
          }}
        >
          <BagIcon />
          <div style={{ fontSize: 11, marginTop: 2 }}>Bag</div>
          {state.cart.length > 0 && (
            <div
              style={{
                position: "absolute", top: -2, right: 2,
                background: "#ff3f6c", color: "#fff",
                borderRadius: "50%", width: 17, height: 17,
                fontSize: 10, fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              {state.cart.length}
            </div>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;

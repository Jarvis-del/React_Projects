import Card from "../components/Card";
import FilterGroup from "../components/FilterGroup";
import Chip from "../components/Chip";
import Empty from "../components/Empty";
import { FilterIcon } from "../assets/icons/Icons";
import { BRANDS } from "../data/navigation";

/**
 * ProductsPage
 *
 * Filterable, sortable product grid with sub-category pills,
 * filter panel, and active-filter chips.
 *
 * @param {{
 *   state: object,
 *   dispatch: Function,
 *   filtered: Array,
 *   inCart: Function,
 *   inWish: Function,
 *   toast: Function,
 *   subCats: string[],
 *   filterOpen: boolean,
 *   setFilterOpen: Function
 * }} props
 */
function ProductsPage({ state, dispatch, filtered, inCart, inWish, toast, subCats, filterOpen, setFilterOpen }) {
  const gLabel =
    state.filters.gender === "All" ? "All Products" : `${state.filters.gender}'s Collection`;

  const hasActiveFilters =
    state.filters.gender !== "All" ||
    state.filters.brand !== "All" ||
    state.filters.discount !== "All" ||
    state.filters.subCategory !== "All";

  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "20px" }}>

      {/* ── Header row ──────────────────────────────────────── */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 14 }}>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "#282c3f" }}>{gLabel}</h2>
          <p style={{ color: "#94969f", fontSize: 13, marginTop: 3 }}>{filtered.length} items</p>
        </div>

        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {/* Sort */}
          <select
            value={state.filters.sort}
            onChange={(e) => dispatch({ type: "SET_FILTER", payload: { sort: e.target.value } })}
            style={{
              border: "1px solid #d4d5d9", borderRadius: 4, padding: "8px 12px",
              fontSize: 13, color: "#282c3f", background: "#fff", cursor: "pointer",
            }}
          >
            <option value="relevance">Sort: Relevance</option>
            <option value="price_asc">Price: Low → High</option>
            <option value="price_desc">Price: High → Low</option>
            <option value="rating">Top Rated</option>
            <option value="discount">Highest Discount</option>
          </select>

          {/* Filter toggle */}
          <button
            onClick={() => setFilterOpen((f) => !f)}
            style={{
              display: "flex", alignItems: "center", gap: 6,
              border: `2px solid ${filterOpen ? "#ff3f6c" : "#d4d5d9"}`,
              color: filterOpen ? "#ff3f6c" : "#282c3f",
              background: "#fff", padding: "8px 16px",
              borderRadius: 4, fontSize: 13, fontWeight: 700, cursor: "pointer",
            }}
          >
            <FilterIcon /> FILTER {filterOpen ? "▲" : "▼"}
          </button>
        </div>
      </div>

      {/* ── Sub-category pills ──────────────────────────────── */}
      <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 10, marginBottom: 14 }}>
        {subCats.map((sc) => (
          <button
            key={sc}
            onClick={() => dispatch({ type: "SET_FILTER", payload: { subCategory: sc } })}
            style={{
              flexShrink: 0,
              border: `1.5px solid ${state.filters.subCategory === sc ? "#ff3f6c" : "#d4d5d9"}`,
              background: state.filters.subCategory === sc ? "#fff3f5" : "#fff",
              color: state.filters.subCategory === sc ? "#ff3f6c" : "#3e4152",
              padding: "6px 16px", borderRadius: 20,
              fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.15s",
            }}
          >
            {sc}
          </button>
        ))}
      </div>

      {/* ── Filter panel ────────────────────────────────────── */}
      {filterOpen && (
        <div
          style={{
            background: "#fff", border: "1px solid #eee", borderRadius: 10,
            padding: 22, marginBottom: 18,
            boxShadow: "0 4px 18px rgba(0,0,0,0.07)", animation: "fadeIn 0.2s ease",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
            <span style={{ fontWeight: 800, fontSize: 15, color: "#282c3f" }}>Filters</span>
            <button
              onClick={() => dispatch({ type: "RESET_FILTERS" })}
              style={{ background: "none", border: "none", color: "#ff3f6c", fontWeight: 700, fontSize: 13, cursor: "pointer" }}
            >
              Clear All
            </button>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))", gap: 28 }}>
            <FilterGroup
              label="GENDER"
              options={["All", "Men", "Women", "Kids", "Beauty", "Home", "Sport"]}
              value={state.filters.gender}
              name="g"
              onChange={(v) => dispatch({ type: "SET_FILTER", payload: { gender: v, subCategory: "All" } })}
            />
            <FilterGroup
              label="BRAND"
              options={BRANDS}
              value={state.filters.brand}
              name="br"
              onChange={(v) => dispatch({ type: "SET_FILTER", payload: { brand: v } })}
            />
            <FilterGroup
              label="DISCOUNT"
              options={[
                { v: "All", l: "Any" },
                { v: "30",  l: "30%+" },
                { v: "35",  l: "35%+" },
                { v: "40",  l: "40%+" },
                { v: "50",  l: "50%+" },
              ]}
              value={state.filters.discount}
              name="d"
              onChange={(v) => dispatch({ type: "SET_FILTER", payload: { discount: v } })}
            />
          </div>
        </div>
      )}

      {/* ── Active filter chips ─────────────────────────────── */}
      {hasActiveFilters && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 14 }}>
          {state.filters.gender !== "All" && (
            <Chip
              label={state.filters.gender}
              onRemove={() => dispatch({ type: "SET_FILTER", payload: { gender: "All", subCategory: "All" } })}
            />
          )}
          {state.filters.subCategory !== "All" && (
            <Chip
              label={state.filters.subCategory}
              onRemove={() => dispatch({ type: "SET_FILTER", payload: { subCategory: "All" } })}
            />
          )}
          {state.filters.brand !== "All" && (
            <Chip
              label={state.filters.brand}
              onRemove={() => dispatch({ type: "SET_FILTER", payload: { brand: "All" } })}
            />
          )}
          {state.filters.discount !== "All" && (
            <Chip
              label={`${state.filters.discount}%+ off`}
              onRemove={() => dispatch({ type: "SET_FILTER", payload: { discount: "All" } })}
            />
          )}
        </div>
      )}

      {/* ── Product grid ────────────────────────────────────── */}
      {filtered.length === 0 ? (
        <Empty
          label="No products found"
          sub="Try adjusting your filters"
          action={() => dispatch({ type: "RESET_FILTERS" })}
          actionLabel="Clear Filters"
        />
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14 }}>
          {filtered.map((p) => (
            <Card key={p.id} p={p} dispatch={dispatch} inCart={inCart} inWish={inWish} toast={toast} />
          ))}
        </div>
      )}
    </main>
  );
}

export default ProductsPage;

import Card from "../components/Card";
import Empty from "../components/Empty";

/**
 * WishlistPage
 *
 * Displays all wishlisted products in a responsive grid.
 *
 * @param {{
 *   state: object,
 *   dispatch: Function,
 *   inCart: Function,
 *   toast: Function
 * }} props
 */
function WishlistPage({ state, dispatch, inCart, toast }) {
  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: 24 }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: "#282c3f", marginBottom: 22 }}>
        My Wishlist ({state.wishlist.length})
      </h2>

      {state.wishlist.length === 0 ? (
        <Empty label="Your wishlist is empty" sub="Save items you love" />
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14 }}>
          {state.wishlist.map((p) => (
            <Card
              key={p.id}
              p={p}
              dispatch={dispatch}
              inCart={inCart}
              inWish={() => true}
              toast={toast}
            />
          ))}
        </div>
      )}
    </main>
  );
}

export default WishlistPage;

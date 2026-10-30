import items from "../data.js";

import CartTable from "./CartTable.jsx";

function App() {
  const inStockItems = items.filter((item) => item.inStock);

  const outOfStockItems = items.filter((item) => !item.inStock);

  return (
    <>
      <main>
        <section aria-labelledby="shopping-cart">
          <h2 id="shopping-cart">Shopping cart</h2>
          <CartTable array={inStockItems} />
          <button className="checkout-action-button" type="button">
            Continue checkout
          </button>
        </section>

        <section aria-labelledby="sold-out">
          <h2 id="sold-out">Sold out</h2>
          <CartTable array={outOfStockItems} />
        </section>
      </main>
    </>
  );
}

export default App;

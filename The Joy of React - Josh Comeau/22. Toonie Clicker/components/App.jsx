import React from "react";

import BigCoin from "./BigCoin.jsx";

function App() {
  const [balance, setBalance] = React.useState(0);

  function updatedBalance() {
    const nextBalance = balance + 2;
    setBalance(nextBalance);
  }

  return (
    <article className="toonie-clicker-wrapper">
      <BigCoin updatedBalance={updatedBalance} />

      <p>
        Your coin balance: {}
        <span className="balance">{balance}</span>
      </p>
    </article>
  );
}

export default App;

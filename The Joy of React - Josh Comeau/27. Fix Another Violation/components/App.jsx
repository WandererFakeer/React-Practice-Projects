import React from "react";

import LoginForm from "./LoginForm.jsx";

function App() {
  const [hasLoggedIn, setHasLoggedIn] = React.useState(false);

  function handleLoginState() {
    const nextLogin = !hasLoggedIn;

    setHasLoggedIn(nextLogin);
  }

  return (
    <>
      {hasLoggedIn ? (
        <div className="paragraph-and-button-wrapper">
          <p>You're already logged in!</p>
          <button className="logout-button" onClick={handleLoginState}>
            Log out
          </button>
        </div>
      ) : (
        <LoginForm handleLoginState={handleLoginState} />
      )}
    </>
  );
}

export default App;

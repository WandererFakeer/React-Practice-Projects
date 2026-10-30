import React from "react";

function Authenticator({ handleSubmit }) {
  const [userCode, setUserCode] = React.useState("");

  return (
    <form onSubmit={(event) => handleSubmit(event, userCode)}>
      <label htmlFor="authorization-code">Enter authorization code:</label>

      <input
        type="text"
        id="authorization-code"
        required={true}
        maxLength={6}
        value={userCode}
        onChange={(event) => setUserCode(event.target.value)}
      />
      <button className="submit-button">Validate</button>
    </form>
  );
}

export default Authenticator;

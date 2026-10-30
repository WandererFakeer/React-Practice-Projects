import Authenticator from "./Authenticator.jsx";

const CORRECT_CODE = "123456";

function App() {
  function handleSubmit(event, userCode) {
    const message = userCode === CORRECT_CODE ? "correct" : "incorrect";
    event.preventDefault();
    alert(`You entered ${message} code`);
  }

  return <Authenticator handleSubmit={handleSubmit} />;
}

export default App;

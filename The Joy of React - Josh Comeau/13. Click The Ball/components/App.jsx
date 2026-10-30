import VisuallyHidden from "./VisuallyHidden.jsx";

function App() {
  function handleClick() {
    alert("You win!");
  }

  return (
    <main className="wrapper">
      <button className="ball" onClick={handleClick}>
        <VisuallyHidden>Ball</VisuallyHidden>
      </button>
    </main>
  );
}

export default App;

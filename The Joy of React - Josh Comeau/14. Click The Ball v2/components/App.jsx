import VisuallyHidden from "./VisuallyHidden.jsx";

function App() {
  const [type, setType] = React.useState("");

  function handleClick(type) {
    const nextType = type;
    setType(nextType);
    
    nextType === "win" ? alert("You win!") : alert("You lose :(");
  }

  return (
    <main className="wrapper">
      <button className="ball" onClick={() => handleClick("win")}>
        <VisuallyHidden>Ball</VisuallyHidden>
      </button>

      <button className="bomb" onClick={() => handleClick("lose")}>
        <span role="img" aria-label="bomb">
          💣
        </span>
      </button>
    </main>
  );
}

export default App;

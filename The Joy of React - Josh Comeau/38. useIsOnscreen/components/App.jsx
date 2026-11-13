import useIsOnscreen from "../hooks/useIsOnscreen.jsx";

function App() {
  const [isVisible, elementRef] = useIsOnscreen();

  return (
    <>
      <header>
        <h1>Red box visible: </h1>
        <p className="visibility">{isVisible}</p>
      </header>

      <div className="box" ref={elementRef}></div>
    </>
  );
}

export default App;

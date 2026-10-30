import ButtonComponent from "./ButtonComponent.jsx";

function App() {
  return (
    <main>
      <ButtonComponent themeColor="oklch(50.483% 0.20496 28.984)">
        Cancel
      </ButtonComponent>

      <ButtonComponent themeColor="oklch(0 0 0)">Confirm</ButtonComponent>
    </main>
  );
}

export default App;

import Friend from "./Friend.jsx";

function App() {
  return (
    <ul className="friends">
      <Friend name="Andrew" isOnline={false} />
      <Friend name="Beatrice" isOnline={true} />
      <Friend name="Chen" isOnline={true} />
    </ul>
  );
}

export default App;

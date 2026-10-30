import SideNote from "./SideNote.jsx";

function App() {
  return (
    <>
      <SideNote type="notice" title="This is a notice">
        Hello World
      </SideNote>

      <SideNote type="warning" title="This is warning!">
        Beep beep!
      </SideNote>

      <SideNote type="error" title="This is error!">
        Oops!
      </SideNote>

      <SideNote type="success" title="This is success!">
        Yay!
      </SideNote>
    </>
  );
}

export default App;

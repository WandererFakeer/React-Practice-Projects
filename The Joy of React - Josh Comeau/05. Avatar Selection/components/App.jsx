import imageData from "../data.js";
import Avatar from "./Avatar.jsx";

const BASE_URL = "https://sandpack-bundler.vercel.app/img/avatars/";

function App() {
  const element = imageData.map(({ id, alt }) => {
    return <Avatar key={id} src={`${BASE_URL}/${id}.png`} alt={alt} />;
  });

  return (
    <main>
      <header>{element}</header>
    </main>
  );
}

export default App;

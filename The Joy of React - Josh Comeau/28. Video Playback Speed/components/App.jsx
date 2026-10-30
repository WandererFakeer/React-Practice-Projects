import VideoPlayer from "./VideoPlayer.jsx";

const VIDEO_SRC = "https://sandpack-bundler.vercel.app/videos/snowstorm.mp4";
const VIDEO_CAPTION = "Snow falls by a pine tree and house";

function App() {
  return (
    <main>
      <VideoPlayer src={VIDEO_SRC} caption={VIDEO_CAPTION} />

      <dl>
        <dt>Filmed by</dt>
        <dd>Karolina Grabowska</dd>
        <dt>Licensed under</dt>
        <dd>Creative Commons Zero (CC0)</dd>
      </dl>
    </main>
  );
}

export default App;

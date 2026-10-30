import MediaPlayer from "./MediaPlayer.jsx";

const ALBUM_ART = "https://sandpack-bundler.vercel.app/img/take-it-easy.png";
const SONG_SRC =
  "https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3";

function App() {
  return (
    <MediaPlayer
      albumCover={ALBUM_ART}
      audioName={"Take It Easy"}
      audioAuthor={"Bvrnout ft. Mia Vaile"}
      src={SONG_SRC}
    />
  );
}

export default App;

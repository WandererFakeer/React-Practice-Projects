import React from "react";

import { Play, Pause } from "react-feather";

import styles from "./MediaPlayer.module.css";

import VisuallyHidden from "./VisuallyHidden.jsx";

function MediaPlayer({ albumCover, src, audioName, audioAuthor }) {
  const mediaRef = React.useRef(null);

  const [isPlaying, setIsPlaying] = React.useState(false);

  function handleAction() {
    const nextPlay = !isPlaying;

    nextPlay ? mediaRef.current.play() : mediaRef.current.pause();

    setIsPlaying(nextPlay);
  }

  return (
    <article className={styles["media-player"]}>
      <img className={styles["album-art"]} src={albumCover} />

      <div className={styles.summary}>
        <h2 className={styles["audio-name"]}>{audioName}</h2>
        <p className={styles["audio-author"]}>{audioAuthor}</p>
      </div>

      <audio src={src} ref={mediaRef} onEnded={() => setIsPlaying(false)} />

      <button className={styles["media-action"]} onClick={handleAction}>
        {isPlaying ? <Pause /> : <Play />}
        <VisuallyHidden>Toggle playing</VisuallyHidden>
      </button>
    </article>
  );
}

export default MediaPlayer;

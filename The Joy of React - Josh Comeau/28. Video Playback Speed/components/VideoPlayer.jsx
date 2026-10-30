import React from "react";

import styles from "./VideoPlayer.module.css";

function VideoPlayer({ src, caption }) {
  const videoControlId = React.useId();
  const videoRef = React.useRef(null);
  const [speed, setSpeed] = React.useState(1);

  function handleSpeed(event) {
    const nextSpeed = event.target.value;
    videoRef.current.playbackRate = nextSpeed;

    setSpeed(nextSpeed);
  }

  return (
    <article>
      <figure>
        <video src={src} controls={true} ref={videoRef} />

        <figcaption>{caption}</figcaption>
      </figure>

      <div className={styles["speed-control"]}>
        <label htmlFor={videoControlId}>Select playback speed:</label>
        <select
          id={videoControlId}
          value={speed}
          onChange={(event) => handleSpeed(event)}
        >
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="1.25">1.25</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </article>
  );
}

export default VideoPlayer;

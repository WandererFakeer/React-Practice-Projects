import styles from "./Movie.module.css";

function Movie({ posterSrc, title, synopsis, rating }) {
  return (
    <article className={styles.details}>
      <img className={styles.poster} src={posterSrc} alt="Movie poster" />

      <section
        className={styles["movie-text"]}
        aria-labelledby="movie-text-details"
      >
        <h2 className={styles.title} id="movie-text-details">
          {title}
        </h2>
        <p className={styles.synopsis}>{synopsis}</p>
        <p className={styles["rating-heading"]}>
          Rating:
          <span
            className={`${styles.rating} ${rating >= 9 && styles["rating-great"]}`}
          >
            {rating}
          </span>
        </p>
      </section>
    </article>
  );
}

export default Movie;

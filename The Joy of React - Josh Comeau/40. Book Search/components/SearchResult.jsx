import styles from "./SearchResult.module.css";

function SearchResult({ result }) {
  const src = "https://sandpack-bundler.vercel.app";

  const { coverSrc, name, author, abstract } = result;

  return (
    <article className={styles["search-result"]}>
      <figure className={styles["image-wrapper"]}>
        <img className={styles["book-cover"]} src={`${src}${coverSrc}`} />
      </figure>

      <div className={styles["text-details-wrapper"]}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.author}>
          By <b className={styles["author-name"]}>{author}</b>
        </p>
        <p className={styles.description}>{abstract}</p>
      </div>
    </article>
  );
}

export default SearchResult;

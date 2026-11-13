import styles from "./UserCard.module.css";

function UserCard({ data }) {
  return (
    <article className={styles["card-wrapper"]}>
      <p className={styles.name}>{data.name}</p>
      <p className={styles.email}>{data.email}</p>
    </article>
  );
}

export default UserCard;

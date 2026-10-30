import styles from "./SideNote.module.css";

function SideNote({ type, title, children }) {
  const className = `${styles.wrapper} ${styles[type]}`;

  return (
    <aside className={className}>
      <h3 className={styles.heading}>{title}</h3>
      <p className={styles.example}>{children}</p>
    </aside>
  );
}

export default SideNote;

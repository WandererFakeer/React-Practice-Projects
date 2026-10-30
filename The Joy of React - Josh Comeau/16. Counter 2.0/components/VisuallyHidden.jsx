import styles from "./VisuallyHidden.module.css";

function VisuallyHidden({ children }) {
  return <span className={styles["visually-hidden"]}>{children}</span>;
}

export default VisuallyHidden;

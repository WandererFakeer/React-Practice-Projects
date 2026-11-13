import { Loader } from "react-feather";

import VisuallyHidden from "./VisuallyHidden.jsx";

import styles from "./LoadingSpinner.module.css";

function LoadingSpinner() {
  return (
    <div className={styles["loading-spinner"]}>
      <Loader size={32} />
      <VisuallyHidden>Loading…</VisuallyHidden>
    </div>
  );
}

export default LoadingSpinner;

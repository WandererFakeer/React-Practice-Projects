import VisuallyHidden from "./VisuallyHidden.jsx";
import styles from "./ButtonComponent.module.css";

function ButtonComponent({ handler, emoji, visuallyHiddenLabel }) {
  return (
    <li>
      <button onClick={handler} className={styles.calculate}>
        {emoji}
        <VisuallyHidden>{visuallyHiddenLabel}</VisuallyHidden>
      </button>
    </li>
  );
}

export default ButtonComponent;

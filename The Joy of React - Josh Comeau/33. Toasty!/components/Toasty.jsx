import React from "react";

import styles from "./Toasty.module.css";

function Toasty() {
  const [isVisible, setIsVisible] = React.useState(false);

  const ghostRef = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsVisible(entry.isIntersecting);
    });

    observer.observe(ghostRef.current);
  }, []);

  return (
    <div className={styles["ghost-wrapper"]} ref={ghostRef}>
      {isVisible && <p className={styles["ghost-character"]}>👻</p>}
    </div>
  );
}

export default Toasty;

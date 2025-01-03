import { useState } from "react";
import Navigation from "./Navigation/navigation";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Kapable</div>
      <button className={styles["hamburger-btn"]} onClick={toggleMenu}>
        ☰
      </button>

      <div
        className={`${styles["navigation-container"]} ${
          isMenuOpen ? styles["menu-open"] : ""
        }`}
      >
        <Navigation />
      </div>
      <button className={styles["apply-btn"]}>Apply Now</button>
    </div>
  );
};

export default Navbar;
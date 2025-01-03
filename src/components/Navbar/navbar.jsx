import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation/navigation";
import styles from "./navbar.module.css";
import ApplyForm from "../ApplyForm/ApplyForm";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <div className={styles.logo}>
          Kapable<span> global</span>
        </div>
      </Link>

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
      <button className={styles["apply-btn"]} onClick={openModal}>
        Apply Now
      </button>

      {isModalOpen && <ApplyForm closeModal={closeModal} />}
    </div>
  );
};

export default Navbar;

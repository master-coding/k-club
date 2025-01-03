import { Link } from "react-router-dom";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <div className={styles["navigation-list"]}>
      <ul>
        <Link to="/permission-denied" className={styles.fallback}>
          <li>Home</li>
        </Link>
        <Link to="/permission-denied" className={styles.fallback}>
          <li>About Us</li>
        </Link>
        <Link to="/permission-denied" className={styles.fallback}>
          <li>Focus Areas</li>
        </Link>
        <Link to="/permission-denied" className={styles.fallback}>
          <li>Resources</li>
        </Link>
        <Link to="/permission-denied" className={styles.fallback}>
          <li>Contact Us</li>
        </Link>
        {/* <li>About Us</li>
        <li>Focus Areas</li>
        <li>Resources</li>
        <li>Contact Us</li> */}
      </ul>
    </div>
  );
}

import styles from "./page.module.css";

export default function Navigation() {
  return (
    <div className={styles["navigation-list"]}>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Focus Areas</li>
        <li>Resources</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
}

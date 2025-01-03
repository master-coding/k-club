import { Link } from "react-router-dom";
import angry from "../../../public/angry-94.gif";
import styles from "./permissionDenied.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={angry} alt="Permission Denied" className={styles.image} />
        <div className={styles["text-content"]}>
          <h1>Permission Denied</h1>
          <p>
            Contact the owner at{" "}
            <a href="mailto:aaris.ahmed1999@gmail.com">
              aaris.ahmed1999@gmail.com
            </a>
          </p>
          <Link to="/" className={styles.back}>
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;

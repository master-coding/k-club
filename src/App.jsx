import Navbar from "./components/Navbar/page";
import Homepage from "./components/Homepage/page";
import Info from "./components/Info/info";
import Impact from "./components/Impact/page";
import LeaderShipProgram from "./components/LeaderShipProgram/page";
import Process from "./components/Process/page";
import Questions from "./components/Questions/page";
import Footer from "./components/Footer/page";
import styles from "./app.module.css";

export default function App() {
  return (
    <div>
      <div className={styles["navbar-container"]}>
        <Navbar />
      </div>
      <div className={styles["homepage-container"]}>
        <Homepage />
      </div>
      <div className={styles["impact-container"]}>
        <Impact />
      </div>
      <div>
        <Info />
      </div>
      <div className={styles["leadership-container"]}>
        <LeaderShipProgram />
      </div>
      <div className={styles["process-container"]}>
        <Process />
      </div>
      <div className={styles["questions-container"]}>
        <Questions />
      </div>
      <div className={styles["footer-container"]}>
        <Footer />
      </div>
    </div>
  );
}

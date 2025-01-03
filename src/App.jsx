import Navbar from "./components/Navbar/navbar";
import Homepage from "./components/Homepage/homepage";
import Impact from "./components/Impact/impact";
import Info from "./components/Info/info";
import ApplicationProcess from "./components/Process/process";
import LeaderShipProgram from "./components/LeaderShipProgram/leadershipProgram";
import KnowMore from "./components/KnowMore/knowMore";
import Questions from "./components/Questions/faq";
import Footer from "./components/Footer/footer.jsx";
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
      <div className={styles["process-container"]}>
        <ApplicationProcess />
      </div>
      <div className={styles["leadership-container"]}>
        <LeaderShipProgram />
      </div>
      <div>
        <KnowMore />
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

"use client";
import styles from "./leadership.module.css";

export default function LeaderShipProgram() {
  return (
    <div className={styles["leadership-container"]}>
      <div>
        <div className={styles["leadership-title"]}>
          Apply Now To Our Leadership Acceleration Program
        </div>
        <div className={styles["leadership-subtitle"]}>
          Begin your transformational journey through our customised programs
          with the first session!
        </div>
      </div>
      <button className={styles["apply-btn"]}>Apply Now</button>
    </div>
  );
}

import { useState } from "react";
import styles from "./leadership.module.css";
import ApplyForm from "../ApplyForm/ApplyForm";

export default function LeaderShipProgram() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      <button className={styles["apply-btn"]} onClick={openModal}>
        Apply Now
      </button>

      {isModalOpen ? <ApplyForm closeModal={closeModal} /> : null}
    </div>
  );
}

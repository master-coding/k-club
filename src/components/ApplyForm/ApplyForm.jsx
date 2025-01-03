import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import styles from "./ApplyForm.module.css";

const ApplyForm = ({ closeModal }) => {
  return (
    <motion.div
      className={styles.modalOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className={styles.modal}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
      >
        <button className={styles.closeButton} onClick={closeModal}>
          <X size={24} />
        </button>

        <h2 className={styles.title}>Application Form</h2>

        <form
          className={styles.form}
          name="application"
          method="POST"
          data-netlify="true"
          netlify
        >
          <input type="hidden" name="form-name" value="application" />

          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Would you like to hire me?</label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input type="radio" name="hireMe" value="Yes" required />
                <span>Yes</span>
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="hireMe" value="No" />
                <span>No</span>
              </label>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="comment">Comment</label>
            <textarea
              id="comment"
              name="comment"
              placeholder="Enter your comment"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ApplyForm;

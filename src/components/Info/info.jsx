import React from "react";
import styles from "./info.module.css";
import { motion } from "framer-motion";

const Info = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const skills = [
    "Fast, Fluent & Structured Thinking",
    "Confident Communication & Public Speaking",
    "Leadership & Team Management",
    "Power Presentation & Storytelling",
    "Negotiation & Persuasion",
    "Influence & Charisma",
  ];

  return (
    <div className={styles.info}>
      <motion.div
        className={styles.hero}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={textVariants}>
          Be Heard. Be Noticed. Be Remembered.
        </motion.h1>
        <motion.p variants={textVariants}>
          Choose from 60+ skills and get your curriculum customised according to
          your learning goals for holistic skill development.
        </motion.p>
        <motion.div className={styles.skills}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={styles.skillBox}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={skillVariants}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Info;

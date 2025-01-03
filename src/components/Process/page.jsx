import React from "react";
import { motion } from "framer-motion";
import { Layers, Users, Award, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

const ApplicationProcess = () => {
  const steps = [
    {
      icon: <Layers size={28} />,
      title: "Submit Your Inquiry",
      description:
        "Fill out the application form and book your 15-minute discovery session",
    },
    {
      icon: <Users size={28} />,
      title: "Shortlisted Applicants",
      description:
        "Get a free 1-on-1 session with our selected trainers after shortlisting",
    },
    {
      icon: <Award size={28} />,
      title: "Start Your Journey",
      description:
        "Join our 12-week program and become part of the League of Top Influential Leaders",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Application Process</h1>
        <p>Take the first step towards leadership excellence!</p>
      </div>

      <div className={styles.timeline}>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={styles.step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <motion.div
              className={styles.iconWrapper}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {step.icon}
            </motion.div>
            <div className={styles.content}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <motion.div
                className={styles.arrow}
                animate={{ x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={24} />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationProcess;

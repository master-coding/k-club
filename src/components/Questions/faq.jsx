import { useState } from "react";
import faqItems from "./faqs";
import styles from "./faq.module.css";

export default function Questions() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className={styles.title}>Frequently Asked Questions</div>
      <div>
        {faqItems.map((faq) => {
          return (
            <div key={faq.id}>
              <div className={styles["faq"]}>
                <div>{faq.title}</div>
                <div
                  className={styles["faq-show"]}
                  onClick={() => toggleItem(faq.id)}
                >
                  +
                </div>
              </div>

              {activeIndex === faq.id && (
                <div className={styles["faq-ans"]}>{faq.content}</div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

import achievemnts from "./impactConst";
import styles from "./page.module.css";

export default function Impact() {
  return (
    <div>
      <div className={styles.title}>Our Journey and Impact</div>
      <div className={styles["achievement-container"]}>
        {achievemnts.map((achievemnt) => {
          return (
            <div style={{ textAlign: "center" }} key={achievemnt.id}>
              <div className={styles["achievement-title"]}>
                {achievemnt.title}
              </div>
              <div>{achievemnt.subtitle}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

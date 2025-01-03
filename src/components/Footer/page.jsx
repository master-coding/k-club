import footers from "./footer";
import styles from "./page.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles["container"]}>
        {footers.map((footer) => (
          <div className={styles["items-container"]} key={footer.id}>
            <div className={styles["heading"]}>{footer.heading}</div>
            {footer.items.map((itm) => (
              <div className={styles["items"]} key={itm.id}>
                {itm.title}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <div className={styles.logo}>Kapable</div>
        <div className={styles.policy}>
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>
          <div>Refund Policy</div>
          <div>Cookie Policy</div>
          <div>CopyRight Policy</div>
        </div>
      </div>
    </div>
  );
}

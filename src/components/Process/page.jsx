import styles from "./page.module.css";

const applicationStates = [
  { id: 1, query: "Submit Your Inquiry" },
  {
    id: 2,
    query: "Shortlisted Applicants Will Get a 1-on-1 Session with our Trainer",
  },
  { id: 3, query: "Onboarding process starts" },
];

export default function Process() {
  return (
    <div style={{ textAlign: "center" }}>
      <div className={styles["application-title"]}>Application Process</div>
      <div className={styles["application-subtitle"]}>
        Take the first step towards leadership excellence!
      </div>
      <div className={styles["application-state-container"]}>
        {applicationStates.map((applicationState) => {
          return (
            <div
              className={styles["application-state"]}
              key={applicationState.id}
            >
              {applicationState.query}
            </div>
          );
        })}
      </div>
    </div>
  );
}

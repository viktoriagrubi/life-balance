import { useState, useEffect } from "react";
import styles from "../StepsTracker/StepsTracker.module.css";

export default function StepsTracker() {
  const [steps, setSteps] = useState(() => {
    return localStorage.getItem("steps") || "";
  });

  useEffect(() => {
    localStorage.setItem("steps", steps);
  }, [steps]);

  return (
    <div className={styles.card}>
      <h2>Steps</h2>
      <input
        type="number"
        placeholder="Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
      />
      <p>Today: {steps || 0} steps</p>
    </div>
  );
}

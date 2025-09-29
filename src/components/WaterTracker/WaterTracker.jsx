import { useState } from "react";
import styles from "../WaterTracker/WaterTracker.module.css";

export default function WaterTracker() {
  const [glasses, setGlasses] = useState(0);

  return (
    <div className={styles.card}>
      <h2>Water</h2>
      <p>Glasses drunk: {glasses}</p>
      <div className={styles.buttons}>
        <button
          onClick={() => setGlasses(glasses - 1)}
          disabled={glasses === 0}
        >
          –
        </button>
        <button onClick={() => setGlasses(glasses + 1)}>+</button>
      </div>
    </div>
  );
}

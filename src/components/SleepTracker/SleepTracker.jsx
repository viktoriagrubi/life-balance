import { useState, useEffect } from "react";
import styles from "../SleepTracker/SleepTracker.module.css";

export default function SleepTracker() {
  const [start, setStart] = useState(() => {
    return localStorage.getItem("sleepStart") || "";
  });
  const [end, setEnd] = useState(() => {
    return localStorage.getItem("sleepEnd") || "";
  });

  useEffect(() => {
    localStorage.setItem("sleepStart", start);
  }, [start]);

  useEffect(() => {
    localStorage.setItem("sleepEnd", end);
  }, [end]);

  const calculateSleep = () => {
    if (!start || !end) return 0;
    const [sH, sM] = start.split(":").map(Number);
    const [eH, eM] = end.split(":").map(Number);
    let startMinutes = sH * 60 + sM;
    let endMinutes = eH * 60 + eM;
    if (endMinutes < startMinutes) {
      endMinutes += 24 * 60;
    }
    return ((endMinutes - startMinutes) / 60).toFixed(1);
  };

  return (
    <div className={styles.card}>
      <h2>Sleep</h2>
      <label>
        Start:
        <input
          type="time"
          value={start}
          onChange={(e) => setStart(e.target.value)}
        />
      </label>
      <label>
        End:
        <input
          type="time"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
        />
      </label>
      <p>Sleep duration: {calculateSleep()} h</p>
    </div>
  );
}

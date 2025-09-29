import { useState } from "react";
import styles from "../Dashboard/Dashboard.module.css";
import WaterTracker from "../WaterTracker/WaterTracker";
import StepsTracker from "../StepsTracker/StepsTracker";
import SleepTracker from "../SleepTracker/SleepTracker";

export default function Dashboard() {
  const [water, setWater] = useState(0);
  const [steps, setSteps] = useState(0);
  const [sleep, setSleep] = useState(0);
  return (
    <div className={styles.dashboard}>
      <h1 className={styles.titledsh}>My Dashboard</h1>
      <div className={styles.trackers}>
        <WaterTracker water={water} setWater={setWater} />
        <StepsTracker steps={steps} setSteps={setSteps} />
        <SleepTracker sleep={sleep} setSleep={setSleep} />
      </div>
    </div>
  );
}

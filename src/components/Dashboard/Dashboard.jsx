import styles from "../Dashboard/Dashboard.module.css";
import WaterTracker from "../WaterTracker/WaterTracker";
import StepsTracker from "../StepsTracker/StepsTracker";

export default function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <WaterTracker />
      <StepsTracker />
    </main>
  );
}

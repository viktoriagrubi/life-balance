import styles from "../Dashboard/Dashboard.module.css";

import WaterTracker from "../WaterTracker/WaterTracker";

export default function Dashboard() {
  return (
    <main className={styles.dashboard}>
      <WaterTracker />
    </main>
  );
}

import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;

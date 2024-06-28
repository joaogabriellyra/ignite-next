import Header from "./components/header";
import Sidebar from "./components/sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main></main>
      </div>
    </>
  );
}

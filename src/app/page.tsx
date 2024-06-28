import Header from "./components/header";
import Post from "./components/post";
import Sidebar from "./components/sidebar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </>
  );
}

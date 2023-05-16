import { Header } from "./Header";
import styles from "./App.module.css";

import "./global.css";
import { NewTask } from "./NewTask";

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <NewTask />
        </main>
      </div>
    </div>
  )
}

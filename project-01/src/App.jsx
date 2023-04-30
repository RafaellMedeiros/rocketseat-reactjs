import { SideBar } from "./components/sideBar/SideBar";
import { Header } from "./components/header/Header";
import { Post } from "./components/post/Post";

import style from "./App.module.css"
import "./global.css"


export function App() {
  return (
    <div>
      <Header/>
      <div className={style.wrapper}>
        <SideBar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}


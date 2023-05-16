import { SideBar } from "./components/sideBar/SideBar";
import { Header } from "./components/header/Header";
import { Post } from "./components/post/Post";

import style from "./App.module.css"
import "./global.css"

const posts = [
  {
      id: 1,
      autor: {
          authorUrl: "https://github.com/diego3g.png",
          name: "Diego Fernandes",
          role: "CTO @ Rocketseat"
      },
      content: [
          { type: 'paragraph', content: 'Fala Galera' },
          { type: 'paragraph', content: 'Passando pra dizer que estou atuando com PHP' },
          { type: 'link', content: 'app.rocketseat.com.br' },
      ],
      publishedAt: new Date('2023-05-01 00:00:00')
  },
  {
      id: 2,
      autor: {
          authorUrl: "https://github.com/maykbrito.png",
          name: "Mayk Brito",
          role: "Educador @ Rocketseat"
      },
      content: [
          { type: 'paragraph', content: 'Cara, muito legal' },
          { type: 'paragraph', content: 'gosto de ver assim' },
          { type: 'link', content: 'app.rocketseat.com.br' },
      ],
      publishedAt: new Date('2023-04-30 21:23:00')
  },
];


export function App() {
  return (
    <div>
      <Header/>
      <div className={style.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                autor = {post.autor}
                content = {post.content}
                publishedAt = {post.publishedAt} 
              />
            )
          })
          }
        </main>
      </div>
    </div>
  )
}


import Header from "./components/header";
import Post from "./components/post";
import Sidebar from "./components/sidebar";
import styles from "./page.module.css";

const posts:any = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/joaogabriellyra.png',
      name: 'João Gabriel Lyra',
      role: 'FS Web Developer'
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date()
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {
        type: 'paragraph', content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link', content: 'jane.design/doctorcare'
      }
    ],
    publishedAt: new Date()
  }
]

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts?.map((post:any) => (
            <Post key={post.id} post={post}/>
          ))}
        </main>
      </div>
    </>
  );
}

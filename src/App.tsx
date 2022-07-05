import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarURL: 'https://github.com/karinacavalcanti.png',
      name: 'Karina Lucindo',
      role: 'Front-end developer & UI Designer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋🏻' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu porfifa. É um projeto que fiz no NLW Return.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-29 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarURL: 'https://images.unsplash.com/photo-1608831540955-35094d48694a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=50',
      name: 'Antônio Carlos',
      role: 'Filantropo'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋🏻' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu porfifa. É um projeto que fiz no NLW Return.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-07-01 21:30:00'),
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  );
}
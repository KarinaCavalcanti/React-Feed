import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Karina Lucindo"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempora sint velit optio! Ipsum, architecto iusto at dolor sed quidem vitae natus?"
          />
          <Post
            author="Karina Lucindo"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempora sint velit optio! Ipsum, architecto iusto at dolor sed quidem vitae natus?"
          />
          <Post
            author="Karina Lucindo"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi tempora sint velit optio! Ipsum, architecto iusto at dolor sed quidem vitae natus?"
          />
        </main>
      </div>
    </>
  );
}
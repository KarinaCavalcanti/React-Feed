import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1606125784258-570fc63c22c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
      />
      <div className={styles.profile}>
        <Avatar 
          src="https://avatars.githubusercontent.com/u/63470083?v=4"
        />
        <strong>Karina Lucindo</strong>
        <span>UI Designer &amp; Front-end Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine 
            size={20}
          />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
} 
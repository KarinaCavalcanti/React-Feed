import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/63470083?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Karina Lucindo</strong>
            <span>UI Designer &amp; Front-end Developer</span>
          </div>
        </div>
        <time
          title="29 de Junho às 07:05 P.M"
          dateTime="2022-06-29 07:05:00 P.M"
        >
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa{' '}👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '} 
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button
            type="submit"
          >
            Publicar
          </button>
        </footer>
      </form>
    </article>
  );
}
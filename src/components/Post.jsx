import styles from './Post.module.css'
export function Post(){
    return (
        <article className={styles.post}>
            <header className={styles.postTopBox}>
            <div className={styles.author}>
                <img src="https://github.com/andrezz64.png" className={styles.avatar}/>
                
                <div className={styles.authorInfo}>
                    <strong>André Felipe</strong>
                    <span>Web Developer</span>
                </div>
            </div>
            
            <time title='Publicado em 11 de maio as 16:41h' dateTime='2022-06-20 16:41:21'>Publicado há 1h</time>
            
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p><a href=''>jane.design/doctorcare</a></p>

                <p>
                <a href=''>#novoprojeto</a>{" "}
                <a href="">#nlw </a>{" "}
                <a href="">#rocketseat</a>{" "}
                </p>
            </div>
        
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário'/>
                
                <button type='submit'>Publicar</button>
            </form>
        </article>
    )
}
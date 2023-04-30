import styles from "./Post.module.css"

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/RafaellMedeiros.png" />
                </div>
                <div className={styles.authorInfo}>
                    <strong>Rafael Medeiros</strong>
                    <span>Web Developer</span>
                </div>

                <time time="10 de Maio as 08:13:00" dataTime="2022-05-11 08:13:00">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
            
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            
                <p>👉 jane.design/doctorcare</p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}
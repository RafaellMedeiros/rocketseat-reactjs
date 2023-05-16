import { ThumbsUp, Trash } from "@phosphor-icons/react"
import styles from "./Comment.module.css"
import { Avatar } from "../avatar/Avatar"
import { useState } from "react"

export function Comment({ content, onDeleteComment }) {

    const [likeComment, setLikeComment] = useState(0);

    function handleDeteleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeComment((state) => {
            return state + 1
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/RafaellMedeiros.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rafael Medeiros</strong>
                            <time time="10 de Maio as 08:13:00" datatime="2022-05-11 08:13:00">Publicado há 1h</time>
                        </div>

                        <button  onClick={handleDeteleteComment} title="Deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeComment}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
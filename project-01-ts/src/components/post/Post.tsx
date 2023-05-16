import { format, formatDistanceToNow } from "date-fns/esm"
import ptBR from "date-fns/locale/pt-BR"

import { Comment } from "../Comment/Comment"
import { Avatar } from "../avatar/Avatar"
import styles from "./Post.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"

interface Content {
    type: 'paragraph' | 'link',
    content: string
}

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface PostProps {
    autor: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({ autor, content, publishedAt }: PostProps) {

    const [comments, setComments] = useState([]);
    const [newTextarea, setNewTextarea] = useState('');


    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    const handleCreateNewComment = (event: FormEvent) => {
        event.preventDefault();

        setComments([...comments, newTextarea])
        setNewTextarea('');
    }

    const handleNewTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('')
        setNewTextarea(event.target.value);
    }

    const deleteComment = (commentDelete: string) => {
        const commentWithoutDeleteOne = comments.filter(comment => {
            return comment !== commentDelete;
        })
        setComments(commentWithoutDeleteOne);
    }

    const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('Esse campo é obrigatorio !')
    }


    const isNewCommentEmpty = newTextarea.length === 0;


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={autor.authorUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{autor.name}</strong>
                        <span>{autor.role}</span>
                    </div>
                </div>

                <time time={ publishedDateFormatted } datatime={publishedAt.toISOString()}>
                    { publishedDateRelativeToNow }
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === "paragraph") {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === "link") {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu comentario</strong>
                <textarea
                    name="comment"
                    onChange={handleNewTextareaChange}
                    value={newTextarea}
                    isInvalid={handleNewCommentInvalid}
                    placeholder="Escreva seu comentario"
                />
                <footer>
                    <button  disabled={isNewCommentEmpty} type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                            <Comment 
                                key={comment}
                                content={comment}
                                onDeleteComment={deleteComment} 
                            />
                    )
                })}
            </div>
        </article>
    )
}
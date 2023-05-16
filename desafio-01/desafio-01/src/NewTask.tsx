import { PlusCircle } from "@phosphor-icons/react";
import styles from "./NewTask.module.css";

export function NewTask() {
    return (
        <div className={styles.newTask}>
            <input placeholder="Adicione uma nova tarega" />
            <button>
                Criar
                <PlusCircle size={32} />
            </button>
        </div>
    )
}
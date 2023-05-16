import { Avatar } from "../avatar/Avatar";
import style from "./SideBar.module.css"
import { PencilLine } from "@phosphor-icons/react";

export function SideBar() {
    return (
        <aside className={style.sideBar}>
            <img 
                className={style.cover}
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
            />
            <div className={style.profile}>
                <Avatar src="https://github.com/RafaellMedeiros.png" />
                <strong>Rafael Medeiros</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
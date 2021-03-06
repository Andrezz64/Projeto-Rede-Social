import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
export function Sidebar (){
    return(
        <aside className={styles.sidebar} >
            <img className={styles.cover}
             src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
            />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/88751248?v=4"/>
                <strong>André Felipe</strong>
                <span>Web Devoloper</span>
            </div>

            <footer>
                <a href="#"> <PencilLine size={20}/> Editar seu perfil</a>
            </footer>
        </aside>
    )
}
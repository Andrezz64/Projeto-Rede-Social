import styles from './App.module.css'
import './global.css'
import { Post }  from "./post"
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
function App() {
 

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
          <aside>
            <Sidebar/>
          </aside>
          <main>
            <Post 
              author="André Felipe" 
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, iusto? Recusandae corrupti facilis provident nulla eveniet quis ullam soluta labore. Impedit unde dicta vitae quasi ratione placeat fugit non at"
            />
            <Post 
              author="Rapahel nogueira" 
              content="Este texto é um Teste Do Json, alo alo backend falando"
            />
          </main>
      </div>

    </div>)
}

export default App


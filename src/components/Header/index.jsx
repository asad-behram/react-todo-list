import styles from './Home.module.css'
import todoLogo from '../../assets/Logotodo-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="" />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder='Add a new task' />
        <button>Create</button>
      </form>
    </header>
  )
}
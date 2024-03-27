import styles from './Home.module.css'
import todoLogo from '../../assets/Logotodo-logo.svg'
import { CiCirclePlus } from "react-icons/ci";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="" />

      <form className={styles.newTaskForm}>
        <input type="text" placeholder='Add a new task' />
        <button>
          Create
          <CiCirclePlus size={20} />
        </button>
      </form>
    </header>
  )
}
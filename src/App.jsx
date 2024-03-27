import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks/Index"

function App() {
  // const [tasks, setTask] = useState([]);

  // function addTask(taskTitle) {
  //   setTask([
  //     ...tasks,
  //     {
  //       id: crypto.randomUUID()
  //     }
  //   ])
  // }

  return (
    <>
    <Header/>
    <Tasks/>
    </>
  )
}

export default App

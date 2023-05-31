import React, { useState } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/Modal';

// CSS
import styles from './App.module.css'

// Interface
import { ITask } from './interfaces/Task';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const toggleModal = () => {
    const modal = document.querySelector("#modal");
    modal?.classList.toggle("hide")
  }

  const editTask = (task: ITask): void => {
    toggleModal()
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = {id, title, difficulty}
    const updatedItems = taskList.map((task)=>{
      return task.id===updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems)
    toggleModal()
  }

  return (
    <div>
      <Modal children={<TaskForm btnText="Editar tarefa"taskList = {taskList} task={taskToUpdate} handleUpdate={updateTask}/>}/>
      <Header />
      <main className={styles.main}>  
        <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList} />
        <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
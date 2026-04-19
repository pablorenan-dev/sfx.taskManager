import TaskHeader from "./components/taskHeader/TaskHeader";
import TaskList from "./components/taskList/TaskList";
import { useState, useEffect } from "react"

function App() {
  const [list, setList] = useState([]);

  // ao renderizar, primeiramente pegar as tasks, e monta elas no list
  useEffect(() => {
    fetch('http://localhost:3000/api/tasks')
      .then(res => res.json())
      .then(data => {
        setList(data);
    });
  }, []);

  // cria uma task
  const createTask = (title, description) =>{
    fetch("http://localhost:3000/api/tasks", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description})
    })
    .then(res => res.json())
    .then(data => setList([...list, data]));
  };

  // muda o completed da task, com a logica de toggle
  const changeStatusTask = (id) => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(updatedTask => setList(list.map(task => task.id == id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      setList(list.filter(task =>  task.id !== id));
    });
  };

 return (
    <div>
      <TaskHeader createTask={createTask}></TaskHeader>
      <TaskList list={list} changeStatusTask={changeStatusTask} deleteTask={deleteTask}></TaskList>
    </div>

  );
}

export default App;

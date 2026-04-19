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
      console.log(data);
    });
  }, []);

  // const addTask = () => {
  //   return "fazer ainda"
  // };

  const createTask = (title, description) =>{
    fetch("http://localhost:3000/api/tasks", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description})
    })
    .then(res => res.json())
    .then(data => setList([...list, data]));
  };

 return (
    <div>
      <TaskHeader createTask={createTask}></TaskHeader>
      <TaskList list={list}></TaskList>
    </div>

  );
}

export default App;

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

 return (
    <div>
      <TaskHeader></TaskHeader>
      <TaskList list={list}></TaskList>
    </div>

  );
}

export default App;

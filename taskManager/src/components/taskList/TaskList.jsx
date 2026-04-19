import "./TaskList.css"

function TaskList({list, changeStatusTask}){

    return (
        list.map((task) => (
        <div className={task.completed ? "task completed" : "task"} key={task.id}>

            <div>

                <h1>{task.title}</h1>
                <p>{task.description}</p>

            </div>
            <div>
                <button onClick={() => changeStatusTask(task.id)}>🟢</button>
                <button>🔴</button>
            </div>
        </div>

        ))
   
    );
}

export default TaskList;
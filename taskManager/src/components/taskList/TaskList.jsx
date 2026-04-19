import "./TaskList.css"

function TaskList({list, changeStatusTask, deleteTask}){

    return (
        list.map((task) => (
        <div className="task-list" key={task.id}>
            <div className={task.completed ? "task completed" : "task"}>

                <div className="task-text">

                    <h1 className="task-title">• {task.title}</h1>
                    <p className="task-description">{task.description}</p>

                </div>
                <div>
                    <button className="btn-actions" onClick={() => changeStatusTask(task.id)}>✅</button>
                    <button className="btn-actions" onClick={() => deleteTask(task.id)}>❌</button>
                </div>
            </div>
        </div>
        ))
   
    );
}

export default TaskList;
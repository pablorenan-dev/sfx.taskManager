import "./TaskList.css"

function TaskList({list}){

    return (
        list.map((task) => (
        <div className="task" key={task.id}>

            <div>

                <h1>{task.title}</h1>
                <p>{task.description}</p>

            </div>
            <div>
                <button>🟢</button>
                <button>🔴</button>
            </div>
        </div>

        ))
   
    );
}

export default TaskList;
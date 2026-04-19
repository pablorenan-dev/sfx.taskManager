import "./TaskList.css"

function taskList(){
    return (

        <div className="task">

            <div>

                <h1>Title</h1>
                <p>Description</p>

            </div>
            <div>
                <button>🟢</button>
                <button>🔴</button>
            </div>
        </div>

    );
}

export default taskList;
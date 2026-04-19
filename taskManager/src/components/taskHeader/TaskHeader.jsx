import "./TaskHeader.css"

function TaskHeader(){

    return (
        <div className="header">
            <div>
                <input type="text" placeholder="Title..."> 

                </input>
                <input type="text" placeholder="Description...">

                </input>
            </div>
            
            <button>
                Submit 
            </button>
        </div>
    )
}

export default TaskHeader;
import "./TaskHeader.css"
import { useState } from "react";

function TaskHeader({createTask}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="header">
            <div>
                <input type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)}> 

                </input>
                <input type="text" placeholder="Description..." onChange={(e) => setDescription(e.target.value)}>

                </input>
            </div>
            
            <button onClick={() => title ? createTask(title, description) : "Title needs a value"}>
                Submit 
            </button>
        </div>
    )
}

export default TaskHeader;
import "./TaskHeader.css"
import { useState } from "react";
import logo from "../../assets/sfx-logo.png";

function TaskHeader({createTask}){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <div className="header">
                <img className="sfx-logo" src={logo}></img>
                <h1 className="title">Task Manager</h1>
            </div>
            <div className="header">
                <div>
                    <input className="input" type="text" placeholder="Title..." onChange={(e) => setTitle(e.target.value)}> 

                    </input>
                    <input className="input" type="text" placeholder="Description..." onChange={(e) => setDescription(e.target.value)}>

                    </input>
                </div>
                
                <button className="btn-submit" onClick={() => title ? createTask(title, description) : "Title needs a value"}>
                    Submit 
                </button>
            </div>
        </div>
    )
}

export default TaskHeader;
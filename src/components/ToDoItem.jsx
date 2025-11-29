import { useState } from "react";
import './style.css'

export default function ToDoItem({task,onEdit,index,onDel}){
    const [complete,setcomplete]=useState(false);
    function handleedit(){ 
        onEdit(index);
    }
    function handledelete(){ 
        onDel(index);
    }
    function handlecomplete(){ 
        setcomplete(!complete);
    }
    return(
        <div className="taskstyle">
            <p className="taskname">{task}</p> 
            <div className="buttons"> {}
            <button onClick={handleedit} className="editbut">Edit</button>
            <button onClick={handledelete} className="delbut">Delete</button>
            <button onClick={handlecomplete} className="combut" style={complete?{backgroundColor:"green"}:{backgroundColor:"gray"}}>{complete?"Completed":"NotComplete"}</button>
            </div>
        </div>
    )
}
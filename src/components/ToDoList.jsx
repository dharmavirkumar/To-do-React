import ToDoItem from "./ToDoItem";
import './style.css'

export default function ToDoList({list,onEdit,onDel}){
   
    return(
        <div className="container">
            {
                list.map((item)=><ToDoItem key={item.id} task={item.name} onEdit={onEdit} index={item.id} onDel={onDel}/>)
            }
        </div>
    )
}
import Header from "./components/Header"
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import './components/style.css'

function App() {
  const [taskname,settask]=useState(""); //state for task input 
      const [editind,seteditind]=useState(null); //state for edit index
      const [items,setitem]=useState([]);// state for list of tasks
      //on input we add value to taskname 
      function handlechange(e){
          settask(e.target.value);
      
      }
      //on click we want it to be added to items state variable 
      function handleclick(){
          let newtask=taskname.trim();
          if(newtask=="") //if empty task name then don't add 
             {
              alert("Please enter task");return;
             }
              if (items.some((item)=>(item.name).toLowerCase()===newtask.toLowerCase())) { //if duplicate exists
    alert("already exists!");
    return;
  }
          if(editind!=null){ // task exists in items and it needs to be edited
               const updated = items.map((item) =>
        item.id === editind ? { ...item, name: newtask } : item
      );
              setitem(updated);
              settask(""); 
              seteditind(null); //after edit make it null
          }
          else{ //new task to be added to list
               setitem([...items,{id:Date.now(),name:taskname}]);  //use Date.now() to set unique key for every task
              settask(""); 
          }
      }
      //to add edit index variable and copy task name of it in input
      function handleedit(index){
           const taskToEdit = items.find((item) => item.id === index); 
    if (taskToEdit) {
      settask(taskToEdit.name);
      seteditind(index);
    }
      }
      //to delete whole task from items using filter
      function handledel(index){
          if(confirm("Delete this task?"))
          setitem(items.filter((item) => item.id != index));
      }
  return(
    <>
      <Header/>
      <div className="body">
         <div className="todo">
            {/* input field with attributes type, value,placeholder */} 
            <input type="text" value={taskname} onChange={(e)=>handlechange(e)} placeholder="Enter Your ToDay Task" className="input"></input>
            {/*button to add task into items */}
            <button onClick={handleclick} className="addbut">{editind==null ? "Add" : "Update"}</button>
          </div>
          {/*to call component and send props to it*/}
          <ToDoList list={items} onEdit={handleedit} onDel={handledel}/>
      </div>
     </>
  )
 
}

export default App
import {FiX } from "react-icons/fi";

function TaskList({task,onToggle}) {

    const deleteTodo = async(id)=>{
      if(window.confirm("Are you sure you want to remove this ?")){
        await fetch("http://localhost:5000/tasks/"+id,{
        method: "DELETE",
        
      }).then(() => {
        alert("Removed Successfully !");
        window.location.reload()
      }).catch((error) => {
        console.log(error.message)
      });
      }
     
  }
  return (
    <div className={task.reminder === true ? `flex justify-between my-6 p-2 shadow-3xl rounded-lg border-l-2 border-buttonBackground` : `flex justify-between my-6 p-2 shadow-3xl rounded-lg`} onDoubleClick={()=>onToggle(task.id)}>
            <div className="flex flex-col justify-items-start">
              <p className="font-bold text-md flex ">{task.title}</p>
              <p className="font-semibold text-sm ">{task.date}</p>
            </div>
            <div className="flex justify-center text-center mt-2 text-orange text-2xl">
              <FiX onClick={()=> deleteTodo(task.id)} />
            </div>
          </div>
  )
}

export default TaskList
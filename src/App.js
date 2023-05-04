import { useEffect, useState } from "react";
import Header from "./components/Header";
import CustomButton from "./components/CustomButton";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks,setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const [fetchError, setFetchError] = useState("")
  
// ! handle event show
  const handleShow = ()=>{
    setShow(!show);
  }

  // ! get single task list
  const getSingleTask = async(id)=>{
    const response = await fetch("http://localhost:5000/tasks/"+id);
    const data = await response.json();
    return data;

  }
  // ! update single task list
  const toggleReminder = async(id)=>{
    const singleTask = await getSingleTask(id);
    const updatedTask = {...singleTask,reminder:!singleTask.reminder}
   try { 
    await fetch("http://localhost:5000/tasks/"+id,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedTask)
    })}catch (error){
      console.log(error);
    }
    setTasks(tasks.map(task=> task.id === id ? {
        ...task,
        reminder:!task.reminder,
      }:task
    ));
  }
 

  //!    fetch tasks list
  useEffect(()=>{
    const fetchTasks = async() => {
      try{
        const response = await fetch(" http://localhost:5000/tasks") 
        if(!response.ok) throw Error("No response from server !")
        const data = await response.json();
        setTasks(data);
      } catch(err){
        setFetchError(err.message);
      } finally{

      }
    }
    (async()=> await fetchTasks())();
  },[]);

  

  return (
    <div className="flex justify-center text-center bg-generalBackground h-screen">
      <div className="w-1/3  bg-white">
        <Header/>
        <div className="mx-10 my-9 ">
          <div>
          <CustomButton onshow={handleShow} show={show} tasks={tasks} />
         { 
         show && <AddTask />
         }
          </div>
          <div>
            {
              tasks.length > 0 ? tasks.map((task)=>(<TaskList key={task.id} task={task} fetchError ={fetchError}  onToggle={toggleReminder}/>)) :('No tasks found !')
            }
          </div>
         </div>
        </div>
      </div>
  )
}
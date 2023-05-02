import { useEffect, useState } from "react";
import Header from "./components/Header";
import CustomButton from "./components/CustomButton";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks,setTasks] = useState([]);
  const [show, setShow] = useState(false);
  const [fetchError, setFetchError] = useState("")
  
//  handle event show
  const handleShow = ()=>{
    setShow(!show);
  }
 
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
    (async()=> await fetchTasks())()
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
              tasks.length > 0 ? tasks.map((task)=>(<TaskList key={task.id} task={task} fetchError ={fetchError} />)) :('No tasks found !')
            }
          </div>
         </div>
        </div>
      </div>
  )
}
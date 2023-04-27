import { useState } from "react";
import Header from "./components/Header";
import CustomButton from "./components/CustomButton";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
export default function App() {
  const [tasks,setTasks] = useState([{id:'1',
  task: 'Task 1',
  day: 'Monday',
  time: '12:00 AM',
  reminder: false},
  {id:'2',
  task: 'Task 2',
  day: 'Monday',
  time: '12:00 AM',
  reminder: false},
  {id:'3',
  task: 'Task 3',
  day: 'Monday',
  time: '12:00 AM',
  reminder: false},
  ]);
  const [show, setShow] = useState(false);
  const handleShow = ()=>{
    setShow(!show);
  }
  
  return (
    <div className="flex justify-center text-center bg-generalBackground h-screen">
      <div className="w-1/3  bg-white">
        <Header/>
        <div className="mx-10 my-9 ">
          <div>
          <CustomButton onshow={handleShow} show={show}/>
         { 
         show && <AddTask/>
         }
          </div>
          <div>
            {
              tasks.length > 0 ? tasks.map(task=>(<TaskList key={task.id} task={task}/>)) :('No tasks found !')
            }
          </div>
         </div>
        </div>
      </div>
  )
}
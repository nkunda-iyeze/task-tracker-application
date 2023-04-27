import { useEffect, useState } from "react";
import Header from "./components/Header";
import CustomButton from "./components/CustomButton";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { db } from "./firebase";
import {collection,onSnapshot,query} from "firebase/firestore"
export default function App() {
  const [tasks,setTasks] = useState([]);
  const [show, setShow] = useState(false);
  
  
//  handle event show
  const handleShow = ()=>{
    setShow(!show);
  }
 
  // read tasks from firebase
  useEffect(()=>{
    const q = query(collection(db,'tasks'));
    const unsubsribe = onSnapshot(q,(QuerySnapshot)=>{
      let tasksArray = []
      QuerySnapshot.forEach((doc)=>{
        tasksArray.push({...doc.data(),id: doc.id});
      });
      setTasks(tasksArray);
    })
      return () => unsubsribe();
  },[]);
  
  // delete task from firebase
  // update tasks in firebase

  
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
              tasks.length > 0 ? tasks.map((task)=>(<TaskList key={task.id} task={task}/>)) :('No tasks found !')
            }
          </div>
         </div>
        </div>
      </div>
  )
}
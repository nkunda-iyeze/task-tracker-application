import {addDoc, collection} from "firebase/firestore"
import { db } from "../firebase";
import { useState } from "react";
function AddTask() {
  const [taskInput,setTaskInput] = useState("")
  const [dateInput,setDateInput] = useState("");
  const [reminder,setReminder] = useState(false);
  
  // handleCheckboxChange event
  function handleCheckboxChange(event) {
    setReminder(event.target.checked);
  }

   // create task to firebase db
   const createTask = async (element) =>{
    element.preventDefault(element);
    if(taskInput && dateInput === ''){
      alert('Please enter date and time');
      return;
    }
    await addDoc(collection(db,'tasks'),{
      task:taskInput,
      date:dateInput,
      reminder:reminder
    })
    setTaskInput('');
    setDateInput('')

  }
  

  return (

    <div className="">
    <form action="" className="flex flex-col " onSubmit={createTask}>
      <label htmlFor="task" className="flex justify-start my-1 text-xs font-semibold">Task</label>
      <input onChange={(e)=>setTaskInput(e.target.value)} value={taskInput} type="text" name="task" className="border border-gray my-1 py-2 px-1 rounded focus:outline-none"/>
      <label htmlFor="day&time" className="flex justify-start my-1 text-xs font-semibold">Day & Time</label>
      <input onChange={(e)=>setDateInput(e.target.value)} value={dateInput}  type="date" name="day&time" className="border border-gray  my-1 py-2 px-1 rounded focus:outline-none"/>
      
      <label htmlFor="reminder" className="inline-block justify-start my-1 text-xs font-semibold">Set reminder</label>
      <div className="flex justify-center">
      <input  type="checkbox" name="reminder" checked={reminder} onChange={handleCheckboxChange}/>
      </div>
      <button className="bg-buttonBackground text-white my-3 py-3 rounded-md font-semibold font-sans">Save Task</button>
    </form>
  </div>
  )
}

export default AddTask
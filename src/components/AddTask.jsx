import { useState } from "react";
function AddTask() {
  const [title,setTitle] = useState("")
  const [date,setDate] = useState("");
  const [reminder,setReminder] = useState(false);
  
  
   // create task to db.json
   const createTask = async (element) =>{
    element.preventDefault()
    const tasksData = {title,date,reminder};

   try {
      await fetch("http://localhost:5000/tasks",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(tasksData)
      });
   } catch(err){
      console.log("Error ")
   } finally{

   }
    setTitle('');
    setDate('');
    window.location.reload();

  }
  

  return (

    <div className="">
    <form action="" className="flex flex-col " onSubmit={createTask}>
      <label htmlFor="task" className="flex justify-start my-1 text-xs font-semibold">Task</label>
      <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" name="task" className="border border-gray my-1 py-2 px-1 rounded focus:outline-none" required/>
      <label htmlFor="day&time" className="flex justify-start my-1 text-xs font-semibold">Day & Time</label>
      <input onChange={(e)=>setDate(e.target.value)} value={date}  type="date" name="day&time" className="border border-gray  my-1 py-2 px-1 rounded focus:outline-none" required/>
      
      <label htmlFor="reminder" className="inline-block justify-start my-1 text-xs font-semibold">Set reminder</label>
      <div className="flex justify-center">
      <input  type="checkbox" name="reminder" checked={reminder} onChange={(e)=>setReminder(e.target.checked)}/>
      </div>
      <button className="bg-buttonBackground text-white my-3 py-3 rounded-md font-semibold font-sans">Save Task</button>
    </form>
  </div>
  )
}

export default AddTask
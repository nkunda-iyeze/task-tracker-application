
function AddTask() {
  return (
    <div className="">
    <form action="" className="flex flex-col ">
      <label htmlFor="task" className="flex justify-start my-1 text-xs font-semibold">Task</label>
      <input type="text" name="task" className="border border-gray my-1 py-2 px-1 rounded focus:outline-none"/>
      <label htmlFor="day&time" className="flex justify-start my-1 text-xs font-semibold">Day & Time</label>
      <input type="text" name="day&time" className="border border-gray  my-1 py-2 px-1 rounded focus:outline-none"/>
      
      <label htmlFor="reminder" className="inline-block justify-start my-1 text-xs font-semibold">Set reminder</label>
      <div className="flex justify-center">
      <input type="checkbox" name="reminder" />
      </div>
      <button className="bg-buttonBackground text-white my-3 py-3 rounded-md font-semibold font-sans">Save Task</button>
    </form>
  </div>
  )
}

export default AddTask
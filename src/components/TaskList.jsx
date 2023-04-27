import {FiX } from "react-icons/fi";
function TaskList({task}) {
  return (
    <div className="flex justify-between my-6 p-2 shadow-3xl rounded-lg border-l-2 border-buttonBackground">
            <div className="flex flex-col justify-items-start">
              <p className="font-bold text-md flex ">{task.task}</p>
              <p className="font-semibold text-sm ">{task.date}</p>
            </div>
            <div className="flex justify-center text-center mt-2 text-orange text-2xl">
              <FiX/>
            </div>
          </div>
  )
}

export default TaskList
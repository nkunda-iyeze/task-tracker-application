import {FiX } from "react-icons/fi";
export default function App() {
  return (
    <div className="flex justify-center text-center bg-generalBackground ">
      <div className="w-1/3  bg-white">
        <header className="bg-background py-6">
          <h1 className="text-white uppercase font-semibold">Task Tracker Application</h1>
        </header>
        <div className="mx-10 my-9 ">
          {/* div one */}
          <div className="flex justify-between">
            <p className="font-bold text-sm mt-1  ">Total task:<span className=" text-white mx-2 bg-buttonBackground px-2 py-1 font-normal rounded">3</span></p>
            <button className="text-white bg-buttonBackground px-6 py-2 font-bold font-sans rounded">Add Task</button>
          </div>
          {/* div two */}
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
          {/* div three */}
          <div className="flex justify-between my-6 p-2 shadow-3xl rounded-lg border-l-2 border-buttonBackground">
            <div className="">
              <p className="font-bold text-sm">Delectus aut autem</p>
              <p className="font-semibold text-xs -ml-8">feb 5th at 2:30pm</p>
            </div>
            <div className="flex justify-center text-center mt-2 text-orange text-2xl">
              <FiX/>
            </div>
          </div>
          {/* div three */}
          <div className="flex justify-between my-6 p-2 shadow-3xl rounded-lg border-l-2 border-buttonBackground">
            <div className="">
              <p className="font-bold text-sm">Delectus aut autem</p>
              <p className="font-semibold text-xs -ml-8">feb 5th at 2:30pm</p>
            </div>
            <div className="flex justify-center text-center mt-2 text-orange text-2xl">
              <FiX/>
            </div>
          </div>
          {/* div three */}
          <div className="flex justify-between my-6 p-2 shadow-3xl rounded-lg border-l-2 border-buttonBackground">
            <div className="">
              <p className="font-bold text-sm">Delectus aut autem</p>
              <p className="font-semibold text-xs -ml-8">feb 5th at 2:30pm</p>
            </div>
            <div className="flex justify-center text-center mt-2 text-orange text-2xl">
              <FiX/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
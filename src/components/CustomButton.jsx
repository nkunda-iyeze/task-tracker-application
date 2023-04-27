function CustomButton({onshow,show}) {
  return (
    <div className="flex justify-between">
    <p className="font-bold text-sm mt-1  ">Total task:<span className=" text-white mx-2 bg-buttonBackground px-2 py-1 font-normal rounded">3</span></p>
    <button className="text-white bg-buttonBackground px-6 py-2 font-bold font-sans rounded" onClick={onshow}> {show ?'Close':'Add Task'} </button>
  </div>
  )
}

export default CustomButton
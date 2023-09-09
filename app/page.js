"use client"
import React, { useState } from 'react'  //react arrow function component

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandeler=(e)=>{
       //confirm("Task Added");
      e.preventDefault()
     console.log(title)
    setmainTask([...mainTask,{title,desc}]);
      settitle("")
      setdesc("")
    
      
  }
  const deleteHandeler=(i)=>{
     let copyTask=[...mainTask]
     copyTask.splice(i,1)
     setmainTask(copyTask)
  }
  let renderTask=<h2>No Task Available </h2>
  if(mainTask.length>0){
   renderTask= mainTask.map((t,i)=>{
    return (  <li  key={i} className='flex justify-between items-center'><div className='flex justify-between mb-5 w-2/3 '>
       
    <h5 className='text-2xl font-semibold'>{t.title}</h5>
    <h5 className='text-lg font-medium'>{t.desc}</h5>
 </div>
    <button className='bg-red-400  text-white rounded-xl font-bold' onClick={()=>{deleteHandeler(i)}}>Done</button>
    </li>)
  
})
  }

  return (
    <>
      <h1 className=' text-white p-5 m-1 text-5xl font-bold text-center'> Aman ToDo Lists </h1>
      <form onSubmit={submitHandeler}>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 rounded-lg py-2 ' placeholder='Enter Task here'  value={title} onChange={(e)=>{
          settitle(e.target.value)
        }}/>
        <input type='text' className='text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded-lg' placeholder='Enter Desription here here' value={desc} onChange={(e)=>{
               setdesc(e.target.value)
        }} />
        <button className='bg-black px-4 py-2 m-8 rounded-2xl text-white text-2xl '>Add Task</button>
      </form>
      <hr/>
      <div className='p-8 bg-slate-100'>
         <ul>
          {renderTask}
         </ul>
      </div>
    </>
  )
}

export default page

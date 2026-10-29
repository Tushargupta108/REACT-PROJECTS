import React, { useState } from "react";
const App =()=>{
  const[Title,setTitle]=useState('');
  const[detail,setdetail]=useState('');
  const[task,settask]=useState([])   // task will be the array of objects  

  const submithandler=(e)=>{
    e.preventDefault();  // helps to reduce form rerendering
    
    const copytask=[...task] //used to keep previous records of task when task changes 
    copytask.push({Title,detail})    // copytask jisme purana deta tha ab usi m naya bhi insert kar do 
    settask(copytask);        // now update task   with whole data 

    setTitle('') // submit name k baad box kahli ho jayega
    setdetail('')
  }


  const deletenode=(idx)=>{
      const copytask=[...task]
      copytask.splice(idx,1)  // from that particular idx of task array dele only one card that ie itself  splice is used to cut 
      settask(copytask)
  }
 
  return (
    <div className="bg-black h-screen lg:flex text-white">
     <form onSubmit={(e)=>{
         submithandler(e)

     }}
     className="flex justify-between item-start p-10   gap-5">
         <div className="flex gap-4 lg:w-1/3 item-start flex-col">
         <h1 className="text-3xl font-bold">ADD  NOTES</h1>
         {/* phla input for heading  */}
         <input 
              type="text" 
              placeholder="Enter notes heading "
              className="px-5 w-full py-2 border-2  outline-none rounded"
              value={Title}
              onChange={(e)=>{
                setTitle(e.target.value)
              }}
         >
          </input>
         {/* doosre input for desc */}
          <input 
              placeholder="Enter Details" 
              className="px-5  py-2 h-20 w-full border-2 outline-none rounded"
              type=""
              value={detail}
              onChange={(e)=>{
                 setdetail(e.target.value)
              }}
              >
           </input>

           <button 
           className="bg-white active:bg-scale-95 text-black px-5 py-2  rounded">
            ADD NOTES</button>

         </div>
         <img  className=" h-15 w-15 rounded-full border-2 border-green-200 object-cover bg-black" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSW1UPrw-l8JHOYG3VWF7aMQvYnuGtgCECbT4FSOos4Q&s" alt=""></img>
     </form>

     <div className=" lg:w-1/2  border-l-2  p-10">

      <h1 className="text-3xl font-bold">YOUR NOTES</h1>

       <div className="flex flex-wrap h-full gap-5 mt-5 overflow-auto">
          {task.map(function(elem,idx){
              return  <div key={idx} className="flex justify-between flex-col relative pt-9 pb-4 item-start  h-52 w-40  bg-covered frounded-2xl text-black rounded-2xl bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUV5tVmg0bHJmbRz7WJS4boFuZMIEPRZRbMq3qh6JuTg&s=10')]">
                         <div>
                         <h3 className="leading-tight text-xl p-4 mt-2 font-bold">{elem.Title}</h3>  
                          {/* jitne task m elements honge utni baar ek ek karke title print hoga cards par */}
                         <p className="mt-4 pb-4 pt-2 p-2 leading-tight font-medium text-gray-500">{elem.detail}</p>
                         </div>
                         <button onClick={()=>{
                          deletenode(idx)  // index is shared as each note has its pecific idx so on delete only specific note will delete
                          }} className="w-full cursor-pointer active:bg-scale-100 object-cover  bg-red-300 rounded-xl font-bold text-white py-1 ">DELETE NOTE</button>
                 </div>
          })}
         
       </div>

     </div>

    </div>
  )
}
export default App
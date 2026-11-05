import { useEffect, useState } from 'react'
import axios from 'axios'
import { Target } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0)
  const [userdata,Setuserdata]=useState([]);
  const [index,Setindex]=useState(1)


  const getdata= async ()=>{
    const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`);

  
   Setuserdata(response.data)
  
  }
  useEffect(function(){
    getdata()
  },[index])  // jaise  jaise index change hogi usi hisaab se getdata call hoga
  
  let printdata='...loading'
  if(userdata.length>0){
    printdata=userdata.map((elem) => {
      return (
        <a
          href={elem.url}
          target="_blank"
          rel="noreferrer"
          key={elem.id}
        >
          <div className="h-44 w-44 bg-black rounded-xl">
            <img
              src={elem.download_url}
              alt={elem.author}
            />
            <h2>{elem.author}</h2>
          </div>
        </a>
      );
    })
  }

  return (
    <div className='bg-black h-screen text-white overflow auto '>
        <h1 className='bg-red-200 h-10 w-10 rounded-4xl items-center justify-center text-black text-3xl'>{index}</h1>
        <div className='flex flex-wrap gap-4 bordewr-bold-green '>
            {printdata}
        </div>
        <div className='gap-10 px-4 m-4 flex justify-center items-center'>
        <button
           className="bg-amber-300 text-black rounded px-4 py-2"
            onClick={() => {
             if (index > 1) {
               Setindex((prev) => prev - 1);
               Setuserdata([])
             }
             }}
          >
         Prev
        </button>

         <button
            className="bg-amber-300 text-black rounded px-4 py-2"
            onClick={() => {
             Setindex((prev) => prev + 1);
             Setuserdata([])
             }}
           >
           Next
         </button>
     </div>

    </div>
  )
}

export default App

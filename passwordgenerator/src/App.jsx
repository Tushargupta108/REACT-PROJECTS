import { useCallback, useState ,useEffect,useRef} from 'react'


function App() {
  const [length, setLength] = useState(8)
  // used to make slider  which dicide the lenth of password
  const [numberAllow,setNumberAllow]=useState(false);
  // use to make another check box which tells pass will contain only numbers
  const [charAllow,setCharAllow]=useState(false);
  // use to make another check box which tells pass will contain only chars
  const [password,setPassword]=useState("")
  // used to make another feild which is showing password



  // useref hook 
  const passwordRef=useRef(null)
  // method for password
  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current?.select(); //select and show which texxt is selected
    window.navigator.clipboard.writeText(password)
  },[password])
  // dependent on password every time password change need to copy new password everytime




   const passwordGenerator=useCallback(()=>{
    let pass=""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789" 
    if (charAllow) str += "!@#$8^&*-_t=[1{}~'"
    for(let i=0;i<length;i++){
      let char=Math.floor(Math.random()*str.length) //random retrun value b/w 0 n 1 * str.len gives random float => math floor make in integer which works as idx
      pass+=str.charAt(char);
      // str ke char idx par jo char h use pass m daal do 
    }
    setPassword(pass);   // password state will change from default

   },[length,numberAllow,charAllow,setPassword]);
  //  in this callback hook callback function and dependency array is passed
  


  useEffect (() => {
    passwordGenerator()
  }, [length, numberAllow, charAllow, passwordGenerator])




  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gra\'>
      <h1 className=' Mtext-white text-center my-3'>Password generator</h1>
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
        <input type="text" 
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder="Password"
              readOnly  //use to show password of slider length size so no one can write anything there
             ref={passwordRef}
        />
      
       <button onClick={copyPasswordToClipboard} >copy</button>
        </div> 
        
         <div >
          <input type="range"
                 min={8}
                 max={100}
                 value={length}   //slider initially shows 8. and increased value when lenth rerenders Because you want React to remember the slider's current value.
                 //value tells React/browser what is currently selected.
                 className=' cursor-pointer'
                 onChange={(e) => setLength(Number(e.target.value))}   //Give me the current value of the slider target is slider here input values from DOM events are generally returned as strings
          />
         
          <label>Length: {length}</label>     
          {/*  use to show text of slider input */}

         </div>
         <div className="flex items-center gap-x-1">
          <input
           type="checkbox"
           defaultChecked={numberAllow}
           id="numberInput"
           onChange={()=>{setNumberAllow((prev)=>!prev)}}
          />
          <label htmlFor="numberInput">Numbers</label>

          <input
           type="checkbox"
           defaultChecked={charAllow}
           id="characterInput"
           onChange={() => {setCharAllow((prev) => !prev)}}
           //Don't execute it right now. Execute it when the checkbox changes
          />
          <label htmlFor="characterInput">Character</label>

         </div>

      </div>
    </>
  )
}

export default App
// when we put javascript in jsx we use {} otherwise in js we dont use them
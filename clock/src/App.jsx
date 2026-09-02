import { useState, useEffect } from "react";
function App(){
  const [time,setTime]=useState(new Date().toLocaleTimeString());
  // inittalize with current time
  const[show,setShow]=useState(true);
  // initial true means intial pahle time hide karne ka option show hoga


 useEffect(()=>{
  if(!show) return;
  // jab button hide hoga to setinterval chalega hi nahi else if  true setinterval runs
  const intervalId= setInterval(()=>{
    // setTimeout(()=>{
      // settime out  runs only one time but now its runnig repeatedly bcz of app rerenders again so use setinterval
      setTime(new Date().toLocaleTimeString());
    },1000)
    // using this useeffect hooks prevents rerendring time update done by setintercal ui k pass bas 1 baar setinterval jayega
    return (()=>{
      clearInterval(intervalId);
    })
    // this return does not run when show is true but  react let it run when dependency array changes

 },[show]);

  return (
    <>
    <button onClick={() => setShow(!show)}>
      {show ? "Hide Time" : "Show Time"}
    </button>
    {/* button created to dispaly or remove time from screen  */}

    {show && <h1>Current Time: {time}</h1>}
    {/* when show is true current time display and when false it hides */}
    {/* time also gets update hence create state variable */}
    </>
  )
}
export default App; 

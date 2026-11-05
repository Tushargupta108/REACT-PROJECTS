import { useEffect, useState } from "react";

function App(){

  const [user,setUser]=useState([]);
  //cosnt [name1,setname]=useState();
  const [count,setCount]=useState(30);

  // async function githubprofile(){

  //   const response=await fetch("https://api.github.com/users");
  //   const data =  await response.json();
  //   //now this aray need to shoecase on ui hence rerender it
  //   setuser(data)
  //   // function calling of setuser for rerendring app function
     
    
  // }
  // githubprofile();
  // // as it rerenderring agnain and again fetch api runinng many time then we need to run this 1 time 
   useEffect(()=>{
    // cose written inside use efect utilized/runs in the last  here when use state hook rerenders the app function
    // use effect hook will not run its callback fucntion again again  when rerender use effect willl skip but there is one 
    //condition to use this hook which runn only on etime need to pass empty array in last of this hook calbak function
    async function githubprofile(){
        const response=await fetch(`https://api.github.com/users?per_page=${count}`);
        const data =  await response.json();
        setUser(data) 
      }
      githubprofile();
   },[count])
  //  as it runs last of code hence it checks count every time after finish if dependency array states changes it rerenders again app function
  // jab jab dependency aaray change hoga tab app functon re render hoga 


  function handleChange(e){
     //setname(e.target.value.toUpperCase());
    //  e.target kon sa event hua tha change hua to uski value ko uppercase m convert kro
    setCount(Number(e.target.value));
    // we set jo bhi value hm input de utni hi profile ui par show ho use need to run use effect hook as when ever count change bcz useeffect runs only 
    //one time so pass count in dependecy array of useeffect hook
  }

  return (
    <>
    <h1>DevGallery</h1>
    <input type="number" value={count} onChange={handleChange} ></input>
    {/* onchange is type of event listner means whe value change handlechange ko call karo */}
    {/* if want control omn this inpurt means what ever you write its under your choice hence use hooks on value(which represent in starting ) */}
    {/* now displaying array from fetch api to screen */}
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",gap:"10px"}}>
      {
         
          user.map((item) => (
            <img
              src={item.avatar_url}
              height="100px"
              width="100px"
              key={item.id}
              alt={item.login}
            />
          ))
        

      }
    </div>
    </>
    // this entire fragment  then React automatically renders the entire returned JSX tree inside #root.
   //     Somewhere in your React entry file, you have something like:
  // ReactDOM.createRoot(document.getElementById("root")).render(<App />);
  )
}
export default App;



import { useState } from "react"



function UpdaterFunction() {
    const [val, setVal] = useState(0);
    const incrementVal = () => {
        setVal((v)=>v + 1);
        setVal((v)=>v + 1);
        setVal((v)=>v + 1);
        
       
    }
  return (
      <div>Value : {val}<br/>
      <button onClick={incrementVal}>Increment</button>
      </div>
  )
}

export default UpdaterFunction
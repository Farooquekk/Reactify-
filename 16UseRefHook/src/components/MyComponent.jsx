import { useState,useEffect } from "react"


function MyComponent() {
    let [num, setNum] = useState(0);
    
    useEffect(() => {
        console.log("Component Renders");
        
     }, );
    
    function handleClick() {
        setNum(n => n + 1);
        console.log(num);
        
    }
  return (
      <div>
          <button onClick={handleClick}>Click Me.</button>
         
    </div>
  )
}

export default MyComponent
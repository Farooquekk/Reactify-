import { useEffect } from "react";
import { useRef } from "react"


function MyComponent2() {

    // using useRef hook
    // const n = useRef(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    useEffect(() => {
        console.log('Component Rerendered');
        // console.log(inputRef);
        
        
    },)

    //  function to handle click
    function handleClick1() {
       
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor='skyblue'
        inputRef2.current.style.backgroundColor=''
        // n.current++;
       // console.log(n);
        // console.log(n.current);
        
        
    }

    function handleClick2() {
       
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = 'beige'
        inputRef1.current.style.backgroundColor = ''
    }
  return (
    <div>
          <button onClick={handleClick1}>Click me </button>   
          <br/>
          <input ref={inputRef1}></input>
          <br />
          <button onClick={handleClick2}>Click me </button>   
          <br/>
          <input ref={inputRef2}></input>
    </div>
  )
}

export default MyComponent2
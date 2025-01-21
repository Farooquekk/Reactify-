
import { useState,useEffect } from "react"
function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');
    // useEffect(() => {
    //     document.title = `Count : ${count}`
    //  }) // updates every time when I click the button
    // useEffect(() => {
    //     document.title = `Kounter`
    //  },[]) // updates just one time
    useEffect(() => {
        document.title = `Count  : ${count*2} + ${color}`
     },[count,color]) // It will run when ever the count updates

    function addCount() {
        setCount((c) => c + 1);
    }
    function subtCount() {
        setCount((c) => c - 1);
    }
    function changeColor() {
        setColor((c) => c === 'green' ? 'red' : 'green');
    }
  return (
      <>
          <p style={{ color: color }}>Count : {count}</p>
          <button onClick={addCount}>Add</button>
          <button onClick={subtCount}>Subt</button><br/>
          <button onClick={changeColor}>Change Color</button>
      </>
  )
}

export default MyComponent
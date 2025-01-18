
import { useState } from 'react'
import './App.css'


function App() {
  const [fruit, setFruit] = useState(["Apple","Banana","Mango","Orange","Grapes","PineApple","BlueBerry"]);

  const handleAddFruit = () => {
    const newFood = document.getElementById('foodInput').value; 
    document.getElementById('foodInput').value = '';
    // setFruit([...fruit, newFood]);
    // using a updater functions to do that
    setFruit(f => [...f, newFood]);
  }
  const handleRemoveFruit = (index) => {
    // setFruit(fruit.filter((element,i)=>i!=index))
    // _ for parameters --> parameter is ignored
    setFruit(fruit.filter((_,i)=>i!=index))
    
  }

  return (
    <>
      <div>
        <h1>List Of Fruits</h1>
        <ul>
          {fruit.map((fruit, index) => <li key={index} onClick={()=>handleRemoveFruit(index)}>{ fruit}</li>)} 
        </ul>
        {/* index argument to remove function */}
        <input type='text' id='foodInput' placeholder='Enter Food Name'></input>
        <button onClick={handleAddFruit}>Add</button>
             </div>
    </>
  )
}

export default App

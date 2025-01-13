import { useState } from "react"


function Name() {
    const [name, setName] = useState("Ada");
    const [age, setAge] = useState(0);
    const [status, setStatus] = useState(true);
    const updateName = () => {
        setName("Hepli.");
        
    }
    const increaseAge = () => {
        setAge(age + 1);
    }
    const toggle = () => {
        setStatus(!status);
    }
  return (
      <div className="name-div">
          <p>Name : {name}  <br/> Age : {age} <br/> IsEmployed ? {status ? 'yes' : 'no'}</p>
          <button className="Name-Btn" onClick={updateName}>Name</button>
          <button className="Name-Btn" onClick={increaseAge}>Age</button>
          <button className="Name-Btn" onClick={toggle}>Toggle</button>
    </div>
  )
}

export default Name
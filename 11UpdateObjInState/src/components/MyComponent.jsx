import { useState } from "react"


function MyComponent() {
    const [obj, setObj] = useState({ name: "Ada", age: 21, isMale: false });
    
    const handleName = (e) => {
        setObj((obj)=>({...obj, name: e.target.value }))
    }
    const handleAge = (e) => {
        setObj((obj)=>({...obj,age:e.target.value}))
    }
    const handleisMale = (e) => {
        setObj((obj) => ({...obj,isMale:e.target.value}))
    }
  return (
      <div>Name : {obj.name} Age : {obj.age}  isMale : {obj.isMale ? 'yes' : 'no'}<br/>
      <input value={obj.name} type="text" onChange={handleName}></input><br/>
      <input value={obj.age} type="number" onChange={handleAge}></input><br/>
      <input value={obj.isMale} type="text" onChange={handleisMale}></input>
      </div>
  )
}

export default MyComponent
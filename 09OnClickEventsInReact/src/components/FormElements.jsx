import { useState } from "react"

function FormElements() {
    const [name, setName] = useState("Farooque");
    const [age, setAge] = useState(1);
    const [desc, setDesc] = useState("");
    const [fee, setFee] = useState();
    const [gender, setGender] = useState("Male");

    const handleName = (e) => {
        setName(e.target.value);
    }
    const handleAge = (e) => {
        setAge(e.target.value);
    }
    const handleDesc = (e) => {
        setDesc(e.target.value);
    }
    const handleFee = (e) => {
        setFee(e.target.value);
    }
    const handleGender = (e) => {
        setGender(e.target.value);
    }

    
  return (
    <div>
          <input value={name} type="text" onChange={handleName}></input>
          <p>Name:{name}</p>
          <br/>
          <input value={age} type="number" onChange={handleAge}></input>
          <p>Age:{age}</p>
          <br/>
          <textarea value={desc} onChange={handleDesc} placeholder="Enter Your Details "></textarea>
          <p>Desc:{desc}</p>
          <br />
          <select value={fee} onChange={handleFee}>
              <option value="">Select Your Batch</option>
              <option value="21SW">21SW</option>
              <option value="22SW">22SW</option>
              <option value="23SW">23SW</option>
          </select>
          <p>Value:{fee}</p>
          <label>
              <input type="radio" value="Male" checked={gender==="Male"} onChange={handleGender}></input>
              Male 
          </label>
          <label >
          <input type="radio" value="Female" checked={gender==="Female"} onChange={handleGender}></input>
              Female
          </label>
          <p>Gender : { gender}</p>
    </div>
  )
}

export default FormElements
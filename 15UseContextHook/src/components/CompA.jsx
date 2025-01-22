import { useState,createContext } from "react"
import CompD from "./CompD"

export const nameContext = createContext();

// prop drilling  from A-->B-->C-->D

function CompA() {
    const [name, setName] = useState('Farooque Sajjad');
  return (
      <div className="box">CompA
          <br />
          <h4>{`Hello ${name}`} </h4>
          <nameContext.Provider  value={ name}>
           <CompD />
          </nameContext.Provider>
         
      </div>
  )
}

export default CompA
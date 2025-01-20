import CompB from "./CompB"
import { useState } from "react";


// prop drilling  from A-->B-->C-->D

function CompA() {
    const [name, setName] = useState('Farooque Sajjad');
  return (
      <div className="box">CompA
          <br />
          <h4>{`Hello ${name}`} </h4>
          <br /> <CompB name={ name} />
          
         
      </div>
  )
}

export default CompA
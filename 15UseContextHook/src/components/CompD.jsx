import { useContext } from "react"
import { nameContext } from "./CompA"

function CompD() {
  const name = useContext(nameContext);
  return (
    <div className="box">CompD
      <br />
      
      <h2>{ `Bye ${name}`}</h2>
     
      
      </div>
  )
}

export default CompD

import CompD from "./CompD"
function CompC(props) {
  return (
    <div className="box">CompC
      <br/>
      <h4>{ `Hello ${props.name}`} </h4>
      <br />
      <CompD name={ props.name} />
    </div>
  )
}

export default CompC
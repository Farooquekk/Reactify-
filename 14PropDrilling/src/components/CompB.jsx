import CompC from "./CompC"

function CompB(props) {
  return (
    <div className="box">CompB <br/>
       <h4>{ `Hello ${props.name}`} </h4>
      <br /> <CompC name={props.name} />
    </div>
  )
}

export default CompB


function Array() {

  // maping to Array
    const list1 = ["Farooque", "Arbab", "Talha", "Rafy"];
    const listItems = list1.map((item,index) => <li key={index}>{item}</li>)
  return (
      <div className="list1"><ol>{listItems}</ol></div>
  )
}

export default Array
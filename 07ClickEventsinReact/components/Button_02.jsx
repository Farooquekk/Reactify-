// handling events
function Button_02() {
    const handleBtnClick = (event) => {
        console.log(event);
        event.target.innerHTML = "Clicked✅"
        

    }
    return (
    //   here we habe to use an arrow function to pass an event 
        // <div className="btn1"><button onClick={(e) => handleBtnClick(e)}>Click Me💥</button></div>
        // now using onDoubleClick event handler
        <div className="btn1"><button onDoubleClick={(e) => handleBtnClick(e)}>Click Me💥</button></div>

  )
}

export default Button_02
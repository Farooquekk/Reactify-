import IsLoggedIn from "./components/IsLoggedIn"


function App() {
  

  return (
    <>
      <IsLoggedIn name="Farooque" isLoggedIn={false} />
      <IsLoggedIn name="Sajjad" isLoggedIn={true} />
      
    </>
  )
}

export default App

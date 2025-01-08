import Intro from "./components/Intro"
import Intro_02 from "./components/Intro_02"


function App() {
 const student ={
   stuName: "Farooque",
     stuAge: 20,
       stuRoll:"22SW040",
       stuUni : "Muet"
 }

  return (
    <>
     <Intro name={"Farooque" } age={11}/>
     <Intro name={"Talha" } age={9}/>
     <Intro name={"Arbab" } age={8}/>
      <Intro name={"Rafy"} age={2} />
      
      {/* now passing an Object */}
      <Intro_02 stu={student}/>
    </>
  )
}

export default App

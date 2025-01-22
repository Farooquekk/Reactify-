
import './App.css'
import CompA from './components/CompA'
import CompD from './components/CompD'
import { nameContext } from './components/CompA'


function App() {
 
const name = 'Farooque Sajjad'
  return (
    <>
      <nameContext.Provider value={name}>
        
        <CompA />
      <p>Okk then ??</p>
        <CompD />
      </nameContext.Provider>
      
    </>
  )
}

export default App

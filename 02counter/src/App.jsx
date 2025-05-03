import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // we used useSate because values not changed in UI
  let [counter,setCounter] = useState(15) //default value deni pdti hein
  
  //let counter = 15

  const addValue=()=>{
    console.log("clicked",counter);
    counter++
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai Aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br></br>
      <button>Remove Value</button>
    </>
  )
}

export default App

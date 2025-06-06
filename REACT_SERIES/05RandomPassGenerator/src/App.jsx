import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const[numberAllowed,setNumberAllowed] = useState(false)
  const[charAllowed,setCharAllowed] = useState(false)
  const[password,setPassword] = useState("")

  //use refhook
  const passwordRef = useRef(null) 

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()-[]{}'':;'.,/?"

    for(let i=1; i<= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length, numberAllowed, charAllowed, setPassword])

  const copypasswordtoclipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='bg-black w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type="text" value={password} placeholder='password' readOnly
          className='outline-none bg-white w-full py-1 px-3' ref={passwordRef}/>

          <button onClick={copypasswordtoclipboard} className='cursor-pointer outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>

            <input type='range' min={6} max={100} value={length} className='cursor-pointer'
            onChange={(e) =>{setLength(e.target.value)}}/>

            <label>Length:{length}</label>
          </div>

          {/* labels for number and character */}
          <div className='flex items-center gap-x-1'>

          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={()=>{
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor='numberInput'>Numbers</label>
            
          </div>

          <div className='flex items-center gap-x-1'>

          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={()=>{
              setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor='characterInput'>Characters</label>
            
          </div>




        </div>
      </div>
    </>
  )
}

export default App

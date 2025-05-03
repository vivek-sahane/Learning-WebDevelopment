import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className='w-full  h-screen  flex justify-center items-center' style={{backgroundColor: color}}>
    <div  className="flex w-200 justify-between bg-oklch(0.558 0.288 302.321) shadow-2xl rounded-xl p-2 text-white mt-24 mx-25">
        <ul onClick={()=>setColor("black")} className="bg-black text-white border-4 border-indigo-500  p-2 rounded-xl">Black</ul>
        <ul onClick={()=>setColor("red")} className='bg-red-500 text-white border-4 border-indigo-500 p-2 rounded-xl'>Red</ul>
        <ul onClick={()=>setColor("green")} className='bg-green-500 text-black border-4 border-indigo-500 p-2 rounded-xl'>Green</ul>
        <ul onClick={()=>setColor("blue")}  className='bg-blue-500 text-black border-4 border-indigo-500 p-2 rounded-xl'>Blue</ul>
        <ul onClick={()=>setColor("orange")} className='bg-orange-500 text-black border-4 border-indigo-500 p-2 rounded-xl '>Orange</ul>
      </div>
    </div>
      
    </>
  )
}

export default App

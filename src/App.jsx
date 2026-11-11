import { useEffect, useState } from "react"

const App = () => {
  const[count,setCount] = useState(0)
  const [delay,setDelay] = useState(1)
  const[factor,setFactor] = useState(1)
  const handleAsyncDec=(delay)=>{
    const asycDecId = setTimeout(() => {
      setCount((prev)=> prev-factor)
    }, delay*1000);
  }

  const handleAsyncInc = (delay)=>{
    setTimeout(() => {
      setCount((prev)=> prev+factor)
    }, delay*1000);
  }

  return (
    <>
      <div className="flex flex-col justify-center mt-5 items-center gap-5">
        <h1 className="text-3xl">{count}</h1>
        <div className="flex flex-col gap-10">
        <div className="flex justify-center items-center gap-6">
          <button onClick={()=>setCount((prev)=> prev+Number(factor))} className="w-10 h-6 border bg-gray-400">+</button>
          <button onClick={()=>setCount((prev)=>prev-Number(factor))} className="w-10 h-6 border bg-gray-400">-</button>
        </div>
        <div className="flex justify-center items-center gap-6">
          <button onClick={()=>handleAsyncInc(delay)} className="w-14 h-6 border bg-gray-400">Async+</button>
          <button onClick={()=> handleAsyncDec(delay)} className="w-14 h-6 border bg-gray-400">Async-</button>
        </div>
        <div>
        <div className="flex gap-1">
          <label htmlFor="slider">Delay</label>
          <input id="slider"type="range" min="1" max="3"  value={delay} onChange={(event)=>setDelay(Number(event.target.value))}/>
        </div>
        <div className="flex align-items gap-4">
          <label htmlFor="factor-setter">Increment/Decrement by</label>
          <input id="factor-setter" className="border-2 border-black outline-none" type="number" value={factor} onChange={(event) => setFactor(Number(event.target.value))}/>
        </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default App
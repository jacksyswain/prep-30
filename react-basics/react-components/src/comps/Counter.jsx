import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)
  return (
    <div>Counter
          <h1>count:{count}</h1>
      
        <button onClick={()=>setCount(count+1)}>inc</button>
        <button onClick={()=>setCount(  count>0 ? count-1:0 )}>dec</button>
    </div>

  )
}

export default Counter
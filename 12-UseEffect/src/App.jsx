import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
   const [num, setNum] = useState(0)
   const [num1, setNum1] = useState(100)
   //Mounting jb b ham +1 kra gh to useEffect chala gh .
  //  useEffect(function(){
  //   console.log("use sate is running ......");
  //  })

  
  //
   useEffect(function(){
    console.log("use sate is running ......");
    
   },[num])


  return (
    <div>
      <h1>Num: {num}</h1>
      <h1>Num1: {num1}</h1>
      <button
       onMouseEnter={()=>{
       setNum(num+1)
      }}
      onMouseLeave={()=>{
        setNum1(num1+10)
      }}>
      Hover
      </button>
    </div>
  )
}

export default App
import React from 'react'

const App = () => {
  const btnCliked=() =>{
      console.log("btn is clicked ");
      
  }
  return (
    <div>
      {/* <h1>Hello Raheel</h1>
      <button onClick={btnCliked}>Change here</button> */}
      <input  onChange={function(ele){
         console.log(ele.target.value);
         
      }} 
      type="text" placeholder='Enter name' />
    </div>
  )
}

export default App
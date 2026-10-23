
import React, { useState } from 'react'
const UseAdv = () => {
     const [num, setnum] = useState(10);

    const btnClicked=()=>{
        // console.log(`Befor ${num}`);
        // setnum(30)
        // console.log(`After Setvalue  ${num}`);

    // setnum(10)// idhr react Rerender nhi hota q k old & new value same hai is liya  
       

    //ya teeno srf ak bar value aka bar +1 krta hai na ka teenbar=> Ouput(11)
    // setnum(num+1)
    // setnum(num+1)   
    // setnum(num+1)


    
//Is ko Batch Update Bolta hain
  //Aghr ap ko is  value +3 bar krni hai to ya way hai
  setnum(prev=>(prev+1))
  setnum(prev=>(prev+1))
  setnum(prev=>(prev+1))


    }
  return (
    <div>
         <h1>{num}</h1>
        <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default UseAdv
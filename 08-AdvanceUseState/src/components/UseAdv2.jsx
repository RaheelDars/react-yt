import React, { useState } from 'react'

const UseAdv2 = () => {
    const [obj, setobj] = useState({user:"Raheel",age:22})

    const btnClicked=()=>{
        // const newObj={...obj}
        // newObj.user="Ali"
        // setobj(newObj)
        //Or
        setobj(prev=>({...prev,age:21}))
    }
  return (
    <div>
          <h1>{obj.user},{obj.age}</h1>
        <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default UseAdv2
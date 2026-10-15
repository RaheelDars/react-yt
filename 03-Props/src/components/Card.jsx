import React from 'react'

function Card(props) {
    console.log(props);
    
  return (

         <div className="card">
                <img src="https://images.unsplash.com/photo-1778984136296-00ccc5eb2092?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
               <h1>{props.user}</h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
               <button>View Profile</button>
         </div>
    
  )
}

export default Card
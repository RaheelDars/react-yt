import React from 'react'

const App = () => {
  // const user=localStorage.getItem('user')
  // localStorage.setItem('user','Raheel')
  // localStorage.setItem('age',18)
  // localStorage.removeItem('user')

  // const user={
  //   username:"Raheel",
  //   age:20,
  //   city:"karachi"
  // }
  // localStorage.setItem('user',JSON.stringify(user))
  // const user=localStorage.getItem('user')
  // console.log(user);
  
   const user=JSON.parse(localStorage.getItem('user'))
  console.log(user);
  
  



  return (
    <div>App</div>
  )
}

export default App
import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='parent'>
      <Card user='Ali' age={21}/>
      <Card user='Dani' age={25}/>
    </div>
  )
}

export default App
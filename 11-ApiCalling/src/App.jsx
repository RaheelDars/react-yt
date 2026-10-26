import axios from 'axios'
import { useState } from 'react';

const App = () => {
 const [data, setData] = useState([])
  //Fetch
  //     async function getData(){
  // //  console.log("Data Recived");
  //     const response= await fetch('https://jsonplaceholder.typicode.com/posts/1')
  //     console.log(response);
  // }

//  const getData= async()=>{
//    const response= await fetch('https://jsonplaceholder.typicode.com/users')
//    const data=await response.json()
//    console.log(data);
   
//  }

// axios
 const getData= async()=>{
  
   const response=await axios.get('https://picsum.photos/v2/list');
   setData(response.data);
   
 }

  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function(ele, idx){
          return <h3>Hello,{ele.author}{idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
import React from 'react'

const FormSubmit = () => {

    const submitHandler=(e)=>{
    e.preventDefault()
    console.log('From Submit');
}

  return (
    <div>
         <form onSubmit={(ele)=>{
        submitHandler(ele)
      }}
       className='flex gap-4 items-center'
       >
        <input 
          className='px-4 py-2 rounded bg-zinc-800 border text-white ' 
          type="text" 
          placeholder='Enter your name' 
        />
        <button className='px-4 py-2 bg-zinc-800 text-white rounded font-medium'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormSubmit
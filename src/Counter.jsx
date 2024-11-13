import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement, reset, incrementByAmount  } from './Redux/slice/counterSlice'



function Counter() {

  const count = useSelector((state)=>state.counterReducer.count)

  const dispatch= useDispatch()

  const[amount,setAmount]=useState("")
  // console.log(amount);

  const handleIncrement=()=>{
    if(amount==''){
      alert("please provide values")
    }
    else{
      dispatch(incrementByAmount(Number(amount)))
      setAmount("")
    }
  }
  

  return (
    <div>
      <h1 className='text-danger mt-5 text-center'>Counter-Application</h1>
      <div className="container border border-2 border-dark mt-5 p-4 w-50 rounded">
        <h1 className='fw-bolder text-center border border-light border-5 p-2 mt-3 rounded bg-dark text-light'>{count}</h1>
        <div className="d-flex justify-content-around align-items-center mt-5">
            
            <button className='btn btn-success w-25' onClick={()=>dispatch(increment())}>Increment</button>
            <button className='btn btn-danger w-25' 
            onClick={()=>dispatch(reset())}
            >Reset</button>
            <button className='btn btn-warning w-25'
            onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
        <div className="d-flex mt-5 ">
            <input type="text" className='form-control ' placeholder='amount to be incremented' name="" id="" onChange={(e)=>setAmount(e.target.value)} value={amount||""}/>
            
            <button className='btn btn-primary ms-3' onClick={handleIncrement}>Increment Amount</button>
        </div>
      </div>
    </div>
  )
}

export default Counter

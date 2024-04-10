import React, { useContext, useState } from 'react'
import { AppContext } from './Context/ContextProvider'
import {v4 as uuidv4} from 'uuid'
function AddExpense() {
    const {dispatch} = useContext(AppContext) 
    const [name, setname] = useState("")
    const [cost, setcost] = useState("")
  

    const onSubmit =(event)=>{
        event.preventDefault();

        const expense ={
            id:uuidv4(),
            name:name,
            cost:parseInt(cost),
        }
        dispatch({
            type:"ADD_EXPENSE",
            payload:expense,
        })
    }
  return (
    <form onSubmit={onSubmit}>
        <div className='row mt-3'>
            <div className='col-sm'>
                <label htmlFor="name">Name</label>
                <input type="text" required='required' className='form-control' id='name'value={name} onChange={(event)=>{setname(event.target.value)}}/>
            </div>
            <div className='col-sm'>
                <label htmlFor="cost">Cost</label>
                <input type="number" required='required' className='form-control' id='cost' value={cost} onChange={(event)=>{setcost(event.target.value)}} />
            </div>
            
            <button type='submit' className='btn btn-primary mt-2' >Add</button>
            
        </div>
    </form>
  )
}

export default AddExpense
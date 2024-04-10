import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from './Context/ContextProvider'

function ExpenseItems(list) {
    const {dispatch} = useContext(AppContext)
    const deleteFunction=()=>{
        dispatch({
            type:'DELETE_ITEM',
            payload:list.id
        })
    }
  return (
    <li className='list-group-item d-flex justify-content-between align-center'>
        {list.name}
        <div>
            <span className='badge bg-primary rounded-pill mr-6'>
                ${list.cost}
            </span>
            <TiDelete size='1.5rem' onClick={deleteFunction}></TiDelete>
        </div>
    </li>
  )
}

export default ExpenseItems
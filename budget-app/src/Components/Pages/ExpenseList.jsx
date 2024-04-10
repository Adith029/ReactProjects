import React, { useContext } from 'react'
import ExpenseItems from './ExpenseItems'
import { AppContext } from './Context/ContextProvider'

function ExpenseList() {
const {expense}=useContext(AppContext)

  return (
    <ul className='list-group'>
        {expense?.map((list,index)=>(
            <ExpenseItems id={list.id} name={list.name} cost={list.cost} />
       ))}
    </ul>
  )
}

export default ExpenseList
import React, { useContext } from 'react'
import { AppContext } from './Context/ContextProvider'

function Outstandings() {
    const {expense} = useContext(AppContext)
    const totalexpense = expense.reduce((total,item)=>{
        return total = total+item.cost
    },0)
  return (
    <div className='alert alert-primary'>
        <span>Outstanding:${totalexpense}</span>
    </div>
  )
}

export default Outstandings
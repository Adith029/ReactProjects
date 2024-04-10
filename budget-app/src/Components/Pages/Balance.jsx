import React, { useContext } from 'react'
import { AppContext } from './Context/ContextProvider'

function Balance() {

    const {budget,expense} = useContext(AppContext)
    const totalExpense=expense.reduce((total,item)=>{
        return (total=total+item.cost)
    },0)

    const alert = totalExpense > budget-100? 'alert-danger': 'alert-success'
  return (
    <div className={`alert ${alert}`}>
        <span>Balance:${budget-totalExpense}</span>
    </div>
  )
}

export default Balance
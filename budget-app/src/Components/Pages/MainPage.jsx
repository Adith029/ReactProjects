import React from 'react'
import Budget from './Budget'
import Balance from './Balance'
import Outstandings from './Outstandings'
import ExpenseList from './ExpenseList'
import AddExpense from './AddExpense'


function MainPage() {
  return (
   <div className='container'>
    <h1 className='mt-3'>Budget App</h1>
    <div className='row mt-5'>
        <div className='col-sm'>
        <Budget/>
        </div>
        <div className='col-sm'>
            <Balance/>
        </div>
        <div className='col-sm'>
            <Outstandings/>
        </div>
    </div>
    <h3>Expenses</h3>
    <div className='row mt-3'>
        <div className='col-sm'>
            <ExpenseList/>
        </div>
    </div>
    <h3 className='mt-3'>Add Expense</h3>
    <div className='row mt-3'>
        <div className="col-sm">
            <AddExpense/>
        </div>
    </div>
   </div>
  )
}

export default MainPage
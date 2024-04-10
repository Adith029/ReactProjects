import React, { createContext, useReducer } from 'react'


const AppReducer =(state,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return{
                ...state,expense:[...state.expense,action.payload],
            }
            case 'DELETE_ITEM':
                return{
                    ...state,expense:state.expense.filter(
                        (expense)=>expense.id!=action.payload
                    ),
                }
            
        default:
            return state
    }
}

const initialState = {
    budget:2000,
    expense:[]
}

 export const AppContext = createContext();

function ContextProvider(props) {
    
    const [state,dispatch]=useReducer(AppReducer,initialState)
  return (
    <AppContext.Provider 
    value={{
        budget:state.budget,
        expense:state.expense,
        dispatch,
     }}
     >
        {props.children}
        </AppContext.Provider> 
  )
}

export default ContextProvider

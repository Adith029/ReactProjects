import React, { useContext, useState } from 'react'
import { Newcontext } from './RouterTableX'
import { useNavigate } from 'react-router-dom'

function AddUser() {
    const [data,setData]= useContext(Newcontext)
    const [formData, setFormData]=useState({name:"",age:"",qualfcn:""})
    const navigate = useNavigate()
  return (
    <div>
       <form onSubmit={(e)=>{
            e.preventDefault()
            setData([...data,formData])
            navigate("/")

        }}>
           
       <label htmlFor="">Name</label>
        <input type="text" name="name" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} />
   
    
       <label htmlFor="">age</label>
       <input type="text" name="age" value={formData.age} onChange={(e)=>setFormData({...formData,age:e.target.value})}/>
    
    
       <label htmlFor="">Qualification</label>
        <input type="text" name="Qualification" value={formData.qualfcn}  onChange={(e)=>setFormData({...formData,qualfcn:e.target.value})} />
    
     <button type='submit'>Add</button>

   </form>
       
    </div>
  )
}

export default AddUser
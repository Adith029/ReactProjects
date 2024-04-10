import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Newcontext } from './RouterTableX'

function DeleteUser() {
    const [data,setData]= useContext(Newcontext)
    const {id} = useParams()
    useEffect(() => {
      setData( data.filter((item,index)=> index!= id))
      
    }, [])
    

  return (
    <div>DeleteUser</div>
  )
}

export default DeleteUser
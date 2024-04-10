import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserTable from './UserTable';
import AddUser from './AddUser';
import EditUser from './EditUser';
import DeleteUser from './DeleteUser';

const Newcontext = createContext();
function RouterTableX() {

    const [data, setdata] = useState([{
        name:"Adith",age:"22",qualfcn:"Bsc"
    },
    {
       name:"Jishnu",age:"21",qualfcn:"Bsc"
     },
     {
        name:"Aromal",age:"23",qualfcn:"Bsc"
     },
     {
        name:"Midhun",age:"24",qualfcn:"Bsc"
     }])
  return (
    <div>
        <Newcontext.Provider value={[data,setdata]}>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<><UserTable/></>}/>
                <Route path='/add' element={<><AddUser/></>}/>
                <Route path='/edit/:id' element={<><EditUser/></>}/>
                <Route path='/delete/:id' element={<><UserTable/></>}/>
            </Routes>
            </BrowserRouter>
        </Newcontext.Provider>
    </div>
  )
}

export default RouterTableX
export {Newcontext}
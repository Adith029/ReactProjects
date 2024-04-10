import React, { useContext } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import '../Styles/UserTable.css'
import { Newcontext } from './RouterTableX'
import { Link } from 'react-router-dom'

function UserTable() {
    const [data,setData]= useContext(Newcontext)
    console.log(data)
  return (
    <div>
        <Form className="d-flex mt-5">
            <label>Search input</label>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Age</th>
          <th>Qualification</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item,index)=><>
        <tr key={index}>
          <td>{index+1}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.qualfcn}</td>
         <td><Link to={`/edit/${index}`}> <Button variant="primary">Edit</Button></Link></td>
          <td>
            <Link to={`/delete/${index}`}><Button variant="danger" >Delete</Button></Link></td>
        </tr>
        </>)}
        </tbody>
        </Table>
        <td>
          <Link to={'/add'} ><Button className='add' variant="success">Add</Button></Link></td>


    </div>
  )
}

export default UserTable
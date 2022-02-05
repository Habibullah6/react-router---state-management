import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, Table } from 'react-bootstrap';
import SingleEmployee from '../SingleEmployee/SingleEmployee';


const Employee = () => {

    const [employees, setEmployees] = useState([])
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/users`
        fetch(url)
        .then(res => res.json())
        .then(data => { setEmployees(data)
        setDisplayMatch(data)})
    },[])
    
    const [displayMatch, setDisplayMatch] = useState([]);

    const handleSearch = event => {
      const searchValue = event.target.value.toLowerCase();
      const matched = employees.filter(employee => employee.name.toLowerCase().includes(searchValue))
      setDisplayMatch(matched)

    }



    return (
    <div>
      <Form className="d-flex container mt-5 mb-5 w-50">
      <FormControl
      type="search"
      placeholder="Search"
      className="me-2"
      aria-label="Search"
      onChange={handleSearch}/>
    </Form>
    <Container> 
    <Table responsive="sm">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Email</th>
        <th>Employee Details</th>
      </tr>
    </thead>
    <tbody>
    {
        displayMatch.map(employee => <SingleEmployee employee={employee} key={employee.id}></SingleEmployee>)
    }
    </tbody>
    </Table>
    </Container>
    </div>
    );
};

export default Employee;
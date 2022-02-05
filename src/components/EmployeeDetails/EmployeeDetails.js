import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EmployeeDetails = () => {
    let {id} = useParams();
    
    const [details, setDetails] = useState({})

   


    const {name, phone, email} = details;
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data))
        
    }, [])



   
   
    return (
    <div className='container mt-5 '>
        <Card className="text-center">
        <Card.Header>Users Details</Card.Header>
        <Card.Body>
        <Card.Title>Name: {name}</Card.Title>
        <Card.Title>Phone: {phone}</Card.Title>
        <Card.Title>Email: {email}</Card.Title>
        </Card.Body>
        </Card>
    </div>
    );
};

export default EmployeeDetails;
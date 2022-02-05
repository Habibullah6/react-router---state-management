import React from 'react';
import { NavLink } from 'react-router-dom';


const SingleEmployee = (props) => {
    const {name, email, phone, id, website} = props.employee;
    return (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{phone}</td>
        <td>{website}</td>
        <td>{email}</td>
        <td>
        <NavLink
             to={`/users/${id}`}
             activeStyle={{
             fontWeight: "bold",
             color: "red"
       }}>Details</NavLink>
        </td>
    </tr>
    );
};

export default SingleEmployee;
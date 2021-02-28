import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import "./ShowPlayers.css";

const ShowPlayers = (props) => {
    const {name, teamName, email, phone, image, annualSalary} = props.player;
    return (
        <div className="player">
            <img src={image} alt=""/>
            <h2>{name}</h2>
            <p>Team Name: {teamName}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Annual Salary: {annualSalary}</p>
            <Button variant="light"><FontAwesomeIcon icon={faUserPlus} /> Add To Team!</Button>{' '}
        </div>
    );
};

export default ShowPlayers;
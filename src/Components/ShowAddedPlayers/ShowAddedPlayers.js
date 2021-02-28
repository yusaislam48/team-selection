import React from 'react';
import './ShowAddedPlayers.css';

const ShowAddedPlayers = (props) => {
    const {name, annualSalary} = props.teamMember;
    return (
        <div  className="addedPlayer">
            <h4>{name}</h4>
            <h6>Salary: {annualSalary}</h6>
        </div>
    );
};

export default ShowAddedPlayers;
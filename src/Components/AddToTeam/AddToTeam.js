import React from 'react';
import './AddToTeam.css';

const AddToTeam = (props) => {
    const teamMembers = props.teamMembers;
    // let totalSalary = 0;
    // for (let i = 0; i < teamMembers.length; i++) {
    //     const element = teamMembers[i];
    //     totalSalary = totalSalary + element.annualSalary;
    // }
    const totalSalary = teamMembers.reduce((total, salary) => total + salary.annualSalary, 0);

    return (
        <div>
            <h2>Players Added To Team: <span className="color">{teamMembers.length}</span></h2>
            <h4><span className="color">Total Salary:</span> {totalSalary}</h4>
        </div>
    );
};

export default AddToTeam;
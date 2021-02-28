import React from 'react';

const AddToTeam = (props) => {
    const teamMembers = props.teamMembers;
    let totalSalary = 0;
    for (let i = 0; i < teamMembers.length; i++) {
        const element = teamMembers[i];
        totalSalary = totalSalary + element.annualSalary;
    }
    return (
        <div>
            <h2>Players Added To Team: {teamMembers.length}</h2>
            <h4>Total Salary: {totalSalary}</h4>
        </div>
    );
};

export default AddToTeam;
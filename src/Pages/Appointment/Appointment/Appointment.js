import React from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
    const{serviceID}=useParams();
    return (
        <div>
            <h1>booking now{serviceID}</h1>
        </div>
    );
};

export default Appointment;
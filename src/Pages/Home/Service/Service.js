import React from 'react';
import { Link } from 'react-router-dom';
import "./Service.css";

const Service = (props) => {
    const{img,disease,description,doctorName,designation,id}=props.service;
    return (
    
      
        
        <div className="service-container">
            
            <img src={img} alt=""></img>
            <h1>Name:{disease}</h1>
            <p>{description}</p>
            <h1 className="fs-4">Doctor's Name:{doctorName}</h1>
            <h1 className="fs-5">Designation:{designation}</h1>
            <Link to={`/appointment/${id}`}>
            <button className="text-warning">Appointment</button>
            </Link>
           
        </div>
    );
};

export default Service;
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
      // getting data from ./data.json
      const [service,setService]=useState([])
      useEffect(()=>{
          fetch('./data.json')
          .then(res=>res.json())
          .then(data=>setService(data))
      },[])
    return (
        <div>
            <h1 id="services">Our Services</h1>
              <div className="services-container mt-5">
            {
              service.map(service=><Service 
              key={service.id}
              service={service}>

              </Service>)
            }
        </div>
        </div>
      
    );
};

export default Services;
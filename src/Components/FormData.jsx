import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './FormData.css';

function FormData() {
  const [formDetails, setFormDetails] = useState({});
  const navigate = useNavigate();  

  const formRefs = {
    name: useRef(''),
    contact: useRef(''),
    gender: useRef(''),
    age: useRef(''),
    dob: useRef(''),
    address: useRef(''),
    drName: useRef(''),
    speciality: useRef(''),
    symptoms: useRef(''),
  };

  const handleGenderChange = (event) => {
    setFormDetails((prevFormDetails) => ({
      ...prevFormDetails,
      gender: event.target.value,
    }));
  };
  const handleSubmit = () => {
    const formData = Object.fromEntries(
      Object.entries(formRefs).map(([key, ref]) => [key, ref.current.value])
    );

    console.log('Form Data:', formData);

    setFormDetails(formData);

 
    navigate('/prescription', { state: { formData } });
  };


    return (
        <div className='form-main' >
        <div className="container">
      <div className="left">
        <div className="header">
          <h2 className="hsp-name-form">UCLA Health – Ronald Reagan  Medical Center</h2>
          <h4 className="animation a2">Be Healthy</h4>
        </div>
        <div className="form">

        <input
              type="text"
              className="form-field animation a3"
              placeholder="Name"
              ref={formRefs.name}
            />

          <input type="text" className="form-field animation a4" placeholder="Contact"       ref={formRefs.contact} />



          <select
  className="form-field animation a4"
  value={formDetails.gender}
  onChange={handleGenderChange}
  ref={formRefs.gender}
>
  <option value="select your gender">Select your gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="other">Other</option>
</select>





          <input type="text" className="form-field animation a4" placeholder="Age"     ref={formRefs.age}  />

          <input type="date" style={{ width: '100%' }} className="form-field animation a4" placeholder="dob"     ref={formRefs.dob} />

          <input type="text" className="form-field animation a4" placeholder="Address"       ref={formRefs.address} />

          <input type="text" className="form-field animation a4" placeholder="Dr name"     ref={formRefs.drName} />

          <input type="text" className="form-field animation a4" placeholder="Speciality"     ref={formRefs.speciality} />

          <input type="text" className="form-field animation a4" placeholder="Symptoms"     ref={formRefs.symptoms} />

    
       
          <button className="animation a6"   onClick={handleSubmit}> SUBMIT </button>
     
        </div>
      </div>
      <div className="right"></div>
    </div>
        </div>
    )
}

export default FormData

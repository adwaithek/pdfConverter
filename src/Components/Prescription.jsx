import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
 
import html2pdf from 'html2pdf.js';
import './prescription.css';

function Prescription() {
  const location = useLocation();
  const formData = location.state?.formData || {};
  const contentRef = useRef();

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();

  const handleDownload = () => {
    const content = contentRef.current;

    html2pdf(content, {
      margin: 10,
      filename: 'prescription.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
  };

  return (
    <div className="prescription-main">
        <div>
      <div ref={contentRef} className="prescription-container">
        <div className='hospital-addresss'>
        <h2 className='hspname'>UCLA Health – Ronald Reagan Medical Center</h2>
        <h4 className='drname'>Dr. John Killer <span>M.B.B.S M.S(Ortho)</span></h4>
        <p className='hsp_pd'>751 visctoria 123 street north state 204 Hometown,US 1234 PH:(2007)003 23498 9906</p>
        </div>

<div className='pat-detail'>

<div className='sl-date'>
    <p>s.No: 001</p>
    <p>Date: {formattedDate}</p>
</div>

        <p>Name: {formData.name}</p>
        <p>Contact: {formData.contact}</p>
        <p>Age: {formData.age}</p>
        <p>Gender: {formData.gender}</p>
        <p>DOB: {formData.dob}</p>
        <p>Address: {formData.address}</p>
        <p>Dr Name: {formData.drName}</p>
         
        <p>Symptoms: {formData.symptoms}</p>


        <p>Provisional diagnosis : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
</p>
        <p>Special Instruction : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
</p>

        </div>



  
      </div>
      <button className='pdf-btn' onClick={handleDownload}>Download as PDF</button>
      </div>
    </div>
  );
}

export default Prescription;

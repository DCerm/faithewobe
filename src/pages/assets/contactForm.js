import React, { useState, useRef } from 'react';
import styles from './css/contactForm.module.css'
import emailjs from '@emailjs/browser';
import  Swal from 'sweetalert2';
import Alert from '@mui/material/Alert';
import './css/alert.css';


export function MyForm() {
  const [inputs, setInputs] = useState({});
  const form = useRef();
  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
          
    emailjs
      .sendForm('service_794sl1o', 'template_oadknqz', form.current, {
        publicKey: 'vB4RH1aFeI87Kt3O-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
		  <Alert severity="success">Message received. You will get a response from us within 24 hours.</Alert>
          Swal.fire({
            title: "Thank you!",
            customClass: "myAlert",
            text: "Your details have been received. You will get a response from us within 24 hours",
            icon: "success",
            timer: "3000",
            timerProgressBar: true,
            timerProgressBarColor:"#9fddfe"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            title: "Something went wrong",
            customClass: "myAlert",
            text: "Please try filling the form again.",
            icon: "error",
          });
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.form} >
        
		<div className={styles.flex}>
		<label className={styles.columns50}>First Name <span style={{color:'red'}}>*</span> <br/>
			<input
				type="text"
				name="FIRSTNAME"
				value={inputs.FIRSTNAME || ""}
				onChange={handleChange}
				placeholder="Your First Name"
				required
				autocomplete="given-name"
			/>
		</label>
		<label className={styles.columns50}>Last Name <span style={{color:'red'}}>*</span>  <br/>
			<input
				type="text"
				name="LASTNAME"
				value={inputs.LASTNAME || ""}
				onChange={handleChange}
				placeholder=" Your Last Name"
				required
				autocomplete="family-name"
			/>
		</label>
		</div>
      	
          <div className={styles.flex}>
            <label className={styles.columns50}>Company Name <span style={{color:'red'}}>*</span> <br/>
                <input
				  type="text"
				  name="COMPANYNAME"
				  value={inputs.COMPANYNAME || ""}
				  onChange={handleChange}
				  required
				  placeholder="Your Company/Business Name"
				  autocomplete="organization"
				/>
      		</label>
      		<label className={styles.columns50}>Business Email <span style={{color:'red'}}>*</span>  <br/>
                <input
				  type="mail"
				  name="COMPANYEMAIL"
				  value={inputs.COMPANYEMAIL || ""}
				  onChange={handleChange}
				  placeholder="example@domain.com"
				  required
				  autocomplete="url"
				/>
      		</label>
      	   </div>
      	   <div className="columns100">
			 <label >What Services do you require? <span style={{color:'red'}}>*</span>
				<select >
					<option id="">Select an Option</option>
					<option id="">Legislative Training</option>
					<option id="">Leadership Training</option>
					<option id="">Entreneurship Training</option>
					<option id="">Workforce Enhancement</option>
					<option id="">Make me become employable</option>
				</select>
			 </label>
		   </div>
      <input className={styles.submit} type="submit" />
    </form>
  );
}

function contactForm() {
  return <MyForm />;
}

export default contactForm;
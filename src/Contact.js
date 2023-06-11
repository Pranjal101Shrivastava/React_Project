
// }
//
// export default ContactPage;

// Contact.js
import React, { useState } from 'react';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        const newErrors = {};
        if (!form.name) newErrors.name = 'Name is required.';
        if (!form.email) newErrors.email = 'Email is required.';
        // Add more validation here

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // Submit the form
        }
    };

    return (
        <div>
            <h1 style={{color: '#212F3D',padding: '0px', margin: '0px', fontSize: '100px',backgroundColor:'#EAEDED ',}}>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div><label style={{color: '#21618C',padding: '20px', margin: '20px', fontSize: '30px'}}>
                    Name:
                    <input type="text" name="name" onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>}
                </label>
                </div>
                <div>
                <label style={{color: '#21618C',padding: '20px', margin: '20px', fontSize: '30px'}}>
                    Email:
                    <input type="text" name="email" onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </label>
                </div>
                <div>
                <label style={{color: '#21618C',padding: '20px', margin: '20px', fontSize: '30px'}}>
                    Write to us:
                    <input type="text" name="message" onChange={handleChange} />
                   
                </label>
                </div>
                {/* Add the rest of the form fields similarly */}
                <div style={{padding: '20px', margin: '20px', }}>
                <input style={{color: '#212F3D',padding: '20px', margin: '20px', fontSize: '20px'}}type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
}

export default Contact;

// import { useState } from 'react';
//
// function ContactPage() {
//     const [form, setForm] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//     });
//
//     const handleInputChange = e => {
//         setForm({
//             ...form,
//             [e.target.name]: e.target.value,
//         });
//     };
//
//     const handleSubmit = e => {
//         e.preventDefault();
//         // Form validation and submission logic goes here
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" name="name" placeholder="Your name" onChange={handleInputChange} required />
//             <input type="email" name="email" placeholder="Your email" onChange={handleInputChange} required />
//             <input type="text" name="subject" placeholder="Subject" onChange={handleInputChange} required />
//             <textarea name="message" placeholder="Your message" onChange={handleInputChange} required />
//             <input type="submit" value="Submit" />
//         </form>
//     );
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
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>}
                </label>
                <label>
                    Email:
                    <input type="text" name="email" onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </label>
                {/* Add the rest of the form fields similarly */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Contact;

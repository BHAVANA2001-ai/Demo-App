import React, { useState } from 'react'
import Titles from './Titles';
import Data from '../../data.json';


const FormComp = (props) => {
    const data = props.data;

    const title = Data.filter((item) => item.id === 9);

    const[isSubmitted, setIsSubmitted] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        number: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 10000);

        setFormData({
            ...formData
        });

        e.target.reset();
    }
  return (
    <div className='form'>
        <Titles data = {title}/>

        <form className="form-content" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
                <input type="tel" name="number" placeholder="Mobile" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
                <textarea name="message" placeholder='Your Message' required onChange={handleChange}/>
                
                <button type="submit" className="submit-btn">Submit</button>
            </form>


            {isSubmitted && (
                <div className="popup">
                    <h3 className='form-submit'>Form submitted successfully!</h3>
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Mobile:</strong> {formData.number}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                    <p><strong>Message:</strong> {formData.message}</p>
                </div>
            )}
      
    </div>
  )
}

export default FormComp

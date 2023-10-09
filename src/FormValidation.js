import React, { useState } from 'react';
import Validation from './Validation';
import './content.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(formData)); 
  };


  return (
    <div className="container">
      <form id="form" onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <div className='input-lable'> 
          <label htmlFor="username">username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
          <div>{errors.username && <p>{errors.username}</p>}</div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="password2">Password again</label>
          <input
            id="password2"
            name="password2"
            type="password"
            value={formData.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

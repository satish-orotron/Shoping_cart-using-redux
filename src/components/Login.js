
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserDetails } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.user.users); 
  //I will take the data from the redux store using use selectorr

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.name === name && user.email === email && user.password === password
    );

    if (user) {
      navigate('/cart');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;

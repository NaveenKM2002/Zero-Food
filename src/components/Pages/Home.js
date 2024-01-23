// LoginPage.js
import React, { useState } from 'react';

const Home = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your authentication logic here
    if (username === 'naveen' && password === 'admin') {
      document.write('Login successful!');
    } else {
      document.write('Login failed. Incorrect username or password.');
    }
  };

  return (
    <div  style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uTqEvT2hmMLAuVwZkzL1RjRcq5MvJAbh6xoFLNdCfuboxiGT1MrDT38KrDZa77tqpkU&usqp=CAU")', width: "1200px", height: 900,backgroundRepeat:"no-repeat" }}>
        <div className='text-center '>
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className=' m-5'
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=' m-5'
          />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default Home;

import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#147A5A] to-[#184A3C]">
      <div className="w-full max-w-md p-8 space-y-4  flex flex-col items-center">
        <img src="https://aura444.com/api/users/images/theme-1709727852550-aura333.png" className='w-40' alt="" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-gradient-to-b from-[#147A5A] to-[#184A3C] shadow rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Login
            </button>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-2 font-bold text-white bg-gradient-to-b from-[#147A5A] to-[#184A3C] shadow rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Login with Demo ID
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

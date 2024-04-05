// Login.js

import React, { useState } from 'react';
import { login } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import {Spinner} from "@nextui-org/react";



const Login = ({ onClose }) => {

  const [loading, setLoading] = useState(false);


  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await login(username, password); // Call the login function
      console.log('Login successful:', response);

      // // Store tokens in localStorage
      // localStorage.setItem('accessToken', response.data.accessToken);
      // localStorage.setItem('refreshToken', response.data.refreshToken);

      // Optionally, redirect to another page or show a success message
      navigate('/home'); // Redirect to home page after successful login
    } catch (error) {
      console.error('Login failed:', error.message);
      toast.error('Login failed. Please try again.'); // Show error message
    }
   finally {
    setLoading(false);
  }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-5">
      <div className="relative max-w-md w-4/5 md:w-full h-1/2 p-6 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Log in</h2>
        <Link to="/">
          <button className="absolute top-0 right-0 mt-4 mr-4 bg-white" onClick={onClose} >
          <X />
          </button> {/* Close the modal on button click */}
        </Link>
        <ToastContainer className="toast-container" />
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
            <div>
              <label htmlFor="username" className="text-base font-medium text-gray-300 ">Username</label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent mt-3 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"   
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-base font-medium text-gray-300">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent mt-3 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"   
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#"  className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 font-semibold leading-7 text-white shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out"

            >
            {loading ? <Spinner /> : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

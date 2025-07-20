import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ handleLogin: onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8080/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || 'Login failed');

      sessionStorage.setItem('token', data.accessToken);
      setMessage('Login successful!');
      setIsSuccess(true);
      onLogin();
      navigate('/');
    } catch (err) {
      setMessage(err.message);
      setIsSuccess(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-gray-900 bg-opacity-60 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-300 mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 text-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-800 text-gray-300 rounded-md py-2 px-3 w-full focus:outline-none focus:ring-2 focus:ring-gray-700"
          />
          <button
            type="submit"
            className="bg-gray-800 text-gray-300 font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition"
          >
            Login
          </button>
          {message && <p className={`text-sm text-center ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>{message}</p>}
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-gray-300 hover:text-white underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

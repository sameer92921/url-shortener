import { useState, useEffect } from 'react';
import URLTable from './URLTable';

const Dashboard = () => {
  const [urls, setUrls] = useState([]);
  const [message, setMessage] = useState('');

  const fetchUrls = async () => {
    try {
      const res = await fetch('http://localhost:8080/urls', {
        headers: {
          'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Failed to fetch URLs');
      setUrls(data);
    } catch (err) {
      setMessage(err.message);
    }
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <div className="bg-gray-900 bg-opacity-60 p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-gray-300 mb-6 text-center">Dashboard</h2>
        {message && <p className="text-sm text-center text-red-400">{message}</p>}
        <URLTable urls={urls} />
      </div>
    </div>
  );
};

export default Dashboard;

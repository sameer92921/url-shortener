import { useState } from 'react';
import axios from 'axios';

const URLShortener = ({ onUrlShortened }) => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  // Get API base URL from environment variable
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting:', longUrl);
    try {
      const token = sessionStorage.getItem('token');
      const response = await axios.post(`${apiBaseUrl}/shorten`, { longUrl }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Response:', response.data);
      setShortUrl(response.data.shortUrl);
      setError('');
      setIsCopied(false); // Reset copy state on new submission
      if (onUrlShortened) {
        onUrlShortened();
      }
    } catch (err) {
      console.error('Error:', err);
      setError(err.response?.data.error || 'Something went wrong');
      setShortUrl('');
      setIsCopied(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Revert after 2 seconds
    } catch (err) {
      console.error('Copy failed:', err);
      setError('Failed to copy URL');
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-gray-300 mb-4 sm:text-2xl">Shorten Your URL</h2>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
        <input
          type="text"
          placeholder="Enter long URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="bg-gray-900 text-gray-300 rounded-md py-2 px-3 w-full sm:w-80 md:w-96 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-gray-700 urlshortener-input"
        />
        <button
          type="submit"
          className="bg-gray-800 text-gray-300 font-semibold py-2 px-4 sm:px-6 rounded-md hover:bg-gray-700 hover:text-gray-200 transition text-sm sm:text-base urlshortener-button"
        >
          Shorten
        </button>
      </form>
      {shortUrl && (
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <p className="text-sm font-medium text-gray-400 sm:text-base urlshortener-text">
            Short URL:{' '}
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-200 transition"
            >
              {shortUrl}
            </a>
          </p>
          <button
            onClick={handleCopy}
            className="bg-gray-800 text-gray-300 font-semibold py-1 px-3 sm:px-4 rounded-md hover:bg-gray-700 hover:text-gray-200 transition text-sm sm:text-base urlshortener-button"
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
      {error && (
        <p className="mt-3 sm:mt-4 text-sm font-medium text-red-500 sm:text-base urlshortener-text">{error}</p>
      )}
    </div>
  );
};

export default URLShortener;
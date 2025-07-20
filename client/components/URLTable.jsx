const URLTable = ({ urls }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-800 rounded-lg">
        <thead>
          <tr>
            <th className="py-3 px-4 text-left text-gray-400 font-semibold">Original URL</th>
            <th className="py-3 px-4 text-left text-gray-400 font-semibold">Short URL</th>
            <th className="py-3 px-4 text-left text-gray-400 font-semibold">Clicks</th>
          </tr>
        </thead>
        <tbody>
          {urls.map((url) => (
            <tr key={url._id} className="border-t border-gray-700">
              <td className="py-3 px-4 text-gray-300">
                <a href={url.longUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {url.longUrl}
                </a>
              </td>
              <td className="py-3 px-4 text-gray-300">
                <a href={`http://localhost:8080/${url.shortCode}`} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {`http://localhost:8080/${url.shortCode}`}
                </a>
              </td>
              <td className="py-3 px-4 text-gray-300">{url.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default URLTable;

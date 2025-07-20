import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, handleLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const onLogout = () => {
    handleLogout();
    navigate('/login');
  };

  const navItems = [
    { name: "About Us", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Docs", path: "/docs" },
    isLoggedIn ? { name: "Dashboard", path: "/dashboard" } : { name: "Login", path: "/login" }
  ];

  return (
    <div className="sticky top-0 bg-black backdrop-blur-md rounded-md z-30 border-b border-gray-800 border-opacity-50">
      <div className="flex items-center justify-between p-2">
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center space-x-4">
            <img src="/logo.svg" alt="Logo" className="h-12 w-auto" />
            <h1 className="text-xl font-bold text-gray-400">URL SHORTENER</h1>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10 mr-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-base font-medium text-gray-400 hover:text-gray-300 transition"
            >
              {item.name}
            </Link>
          ))}
          {isLoggedIn && (
            <button
              onClick={onLogout}
              className="text-base font-medium text-gray-400 hover:text-gray-300 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            className="text-gray-400 focus:outline-none"
          >
            <div className="space-y-1">
              <div className="w-7 h-0.5 bg-gray-400"></div>
              <div className="w-7 h-0.5 bg-gray-400"></div>
              <div className="w-7 h-0.5 bg-gray-400"></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col p-6">
          <div className="flex justify-end">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-400 text-4xl focus:outline-none"
            >
              ×
            </button>
          </div>

          <div className="flex flex-col justify-center items-center flex-grow space-y-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold text-gray-400 hover:text-gray-300 transition"
              >
                {item.name}
              </Link>
            ))}
            {isLoggedIn && (
              <button
                onClick={() => { onLogout(); setMenuOpen(false); }}
                className="text-3xl font-semibold text-gray-400 hover:text-gray-300 transition"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
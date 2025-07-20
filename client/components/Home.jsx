import React from "react";
import Navbar from "./Navbar";
import UrlShortener from "./URLShortener";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="border-l border-r border-gray-800 border-opacity-50 rounded-md">

          {/* Main Content */}
          <div className="py-12">
            {/* Hero Section */}
            <div className="text-center py-16 px-6">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-300 mb-4">
                Shorten Your URLs with Ease
              </h1>
              <p className="text-lg sm:text-xl font-medium text-gray-400 mb-8 max-w-2xl mx-auto">
                Create concise, shareable links in seconds. Fast, reliable, and secure URL shortening for everyone.
              </p>
              <a
                href="#shortener"
                className="inline-block bg-gray-800 text-gray-300 font-semibold py-3 px-6 rounded-md hover:bg-gray-700 hover:text-gray-200 transition"
              >
                Get Started
              </a>
            </div>

            {/* UrlShortener Section */}
            <div id="shortener" className="py-16 px-6">
              <UrlShortener />
            </div>

            {/* Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 pb-16 mt-15">
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-md p-6 hover:bg-opacity-70 transition">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Fast Shortening</h3>
                <p className="text-base font-medium text-gray-400">
                  Instantly generate short URLs with a single click, powered by our robust API.
                </p>
              </div>
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-md p-6 hover:bg-opacity-70 transition">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Custom Links</h3>
                <p className="text-base font-medium text-gray-400">
                  Personalize your short URLs to make them memorable and brand-friendly.
                </p>
              </div>
              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-md p-6 hover:bg-opacity-70 transition">
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Analytics</h3>
                <p className="text-base font-medium text-gray-400">
                  Track clicks and performance of your short URLs with detailed insights.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
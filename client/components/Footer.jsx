import React from "react";

function Footer() {
  const footerLinks = {
    About: ["Our Story", "Team", "Careers"],
    Resources: ["Docs", "Blog", "Support"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="bg-black backdrop-blur-md text-gray-400 border border-t border-gray-800 border-opacity-50">
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-300 mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.About.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-400 hover:text-gray-300 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Resources Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.Resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-base font-medium text-gray-400 hover:text-gray-300 transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-300 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@urlshortener.com"
                  className="text-base font-medium text-gray-400 hover:text-gray-300 transition"
                >
                  support@urlshortener.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-medium text-gray-400 hover:text-gray-300 transition"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base font-medium text-gray-400 hover:text-gray-300 transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div className="border-t border-gray-800 border-opacity-50 text-center py-6 px-6">
          <p className="text-base font-medium text-gray-400">
            © {new Date().getFullYear()} URL Shortener. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-8">
      <div className="container mx-auto text-center text-gray-400">
        <p>&copy; 2024 PortfolioApp. All rights reserved.</p>
        <ul className="flex justify-center space-x-4 mt-2">
          <li>
            <h1 className="hover:text-white">
              Privacy Policy
            </h1>
          </li>
          <li>
            <h1 className="hover:text-white">
              Terms of Service
            </h1>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden md:hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Menu panel */}
      <div className="absolute right-0 top-0 bottom-0 w-64 bg-[#faf5f0] shadow-xl">
        {/* Close button */}
        <div className="p-4 flex justify-end">
          <button
            onClick={onClose}
            className="p-2 text-black hover:text-gray-600"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <nav className="px-4 pt-2 pb-4">
          <Link
            to="/"
            className="block py-2 text-lg font-semibold hover:text-gray-600"
            onClick={onClose}
          >
            Home
          </Link>
          <Link
            to="/archives"
            className="block py-2 text-lg font-semibold hover:text-gray-600"
            onClick={onClose}
          >
            Newsletter Archives
          </Link>
          <Link
            to="/about"
            className="block py-2 text-lg font-semibold hover:text-gray-600"
            onClick={onClose}
          >
            About Us
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;

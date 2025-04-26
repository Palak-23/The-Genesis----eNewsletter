import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';
import FlipbookViewer from '../components/FlipbookViewer';
import { newsletters } from '../data/newsletters';

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

const Archives = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [flipbookContent, setFlipbookContent] = useState(null);

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#f5f5f5] z-50">
        <div className="container-custom">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold">
                The Genesis
              </Link>
            </div>
            <div className="hidden sm:flex sm:space-x-12">
              <Link
                to="/"
                className="nav-link text-lg font-semibold hover:text-gray-800 transition-all duration-300 hover:scale-110 transform inline-block"
              >
                Home
              </Link>
              <Link
                to="/archives"
                className="nav-link text-lg font-semibold hover:text-gray-800 transition-all duration-300 hover:scale-110 transform inline-block"
              >
                Newsletter Archives
              </Link>
              <Link
                to="/about"
                className="nav-link text-lg font-semibold hover:text-gray-800 transition-all duration-300 hover:scale-110 transform inline-block"
              >
                About Us
              </Link>
            </div>
            {/* Mobile Menu Button */}
            <div className="flex sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />

      <main className="pt-24 pb-12 px-4">
        <div className="container-custom">
          <div className="bg-[#faf5f0] rounded-2xl shadow-sm p-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Newsletter Archives
              </h1>
              <p className="text-xl text-gray-600">
                Browse through our collection of newsletters
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsletters.map((newsletter) => (
                <Link
                  key={newsletter.id}
                  to={`/newsletters/${newsletter.id}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {newsletter.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {formatDate(newsletter.date)}
                    </p>
                    <p className="text-gray-500 mb-4 line-clamp-3">
                      {newsletter.description}
                    </p>
                    <div className="text-black hover:text-gray-900">
                      Read More →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Archives;

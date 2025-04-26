import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';
import FlipbookViewer from '../components/FlipbookViewer';
import { newsletters } from '../data/newsletters';

const NewsletterView = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { id } = useParams();
  const newsletter = newsletters.find((n) => n.id === parseInt(id));

  if (!newsletter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Newsletter not found</h2>
          <Link to="/archives" className="mt-4 inline-block text-blue-600 hover:underline">
            Return to Archives
          </Link>
        </div>
      </div>
    );
  }

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

      <div className="pt-24 pb-12 px-4">
        <div className="container-custom">
          <div className="bg-[#faf5f0] rounded-2xl shadow-sm p-8">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {newsletter.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {new Date(newsletter.date).toLocaleDateString('en-US', {
                  month: 'long',
                  year: 'numeric',
                })}
              </p>

              <div className="max-w-4xl w-full bg-white rounded-xl shadow-lg p-8">
                {newsletter.images ? (
                  <FlipbookViewer
                    content={newsletter}
                    onClose={() => {}}
                  />
                ) : (
                  <div className="text-center text-gray-500 text-lg py-16">
                    Flipbook coming soon!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterView;

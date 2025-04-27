import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from '../components/MobileMenu';
import { useNavigate } from 'react-router-dom'; //updated


const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

const navigate = useNavigate(); //updated

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
                className="inline-flex items-center justify-center p-4 rounded-md text-black focus:outline-none"
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

      <main className="p-8">
        <div className="bg-[#f2f0eb] w-full min-h-screen">
          <div className="container-custom">
            {/* Hero Section */}
            <div className="pt-16 px-16">
              <h1 className="text-[5rem] font-bold text-center tracking-wider -mb-6">
                THE GENESIS
              </h1>
              <p className="text-xl text-gray-700 text-center tracking-wide font-light -mb-48">
                A Repository of Thoughts & Tech.
              </p>
              <div className="flex justify-center">
                <div className="flex items-center justify-between w-full px-8">
                  <div className="max-w-md -ml-24">
                    <p className="text-2xl font-light leading-none text-black">
                      "An investment
                      <br />
                      in knowledge
                      <br />
                      pays the
                      <br />
                      best interest."
                    </p>
                    <p className="text-lg mt-2 text-gray-600">
                      Benjamin Franklin
                    </p>
                  </div>

                  <div className="w-[64rem] h-[48rem] opacity-90 transition-transform duration-500 hover:scale-110 animate-float flex justify-center items-center mx-auto" style={{ marginLeft: '6rem' }}>
                    <img
                      src="/eagle-logo.png"
                      alt="Eagle Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="max-w-md text-right -mr-24">
                    <p className="text-2xl font-light leading-none text-black">
                      "It is better<br /> to have the right problem<br />than the wrong solution."
                    </p>
                    <p className="text-lg mt-2 text-gray-600">
                      Richard Feynman
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center -mt-40">
                <p className="text-[1.35rem] font-light leading-none text-black max-w-3xl text-center">
                  What started as a college initiative became a collection of
                  ideas, technology, and innovation. This archive preserves our
                  journey—one edition at a time.
                </p>
              </div>

              <div className="text-center mt-10">
                <button onClick={() => navigate('archives')} 
                  className="text-lg font-light px-8 py-3 rounded-full border-2 border-black text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                  View All Newsletters
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";

const About = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="pt-24 pb-12 px-4">
        <div className="container-custom">
          <div className="bg-[#faf5f0] rounded-2xl shadow-sm p-8">
            <div className="flex flex-col items-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">
                About Us
              </h1>
              <p className="text-xl text-gray-600 mb-8 text-center">
                Learn more about our journey
              </p>
              <img
                src="/Team Members.png"
                alt="The Genesis Team Group Photo"
                className="mx-auto max-w-[650px] w-full h-auto object-cover rounded-lg shadow-md mb-10 transition-transform duration-300 ease-in-out hover:scale-105"
              />
              <div className="prose max-w-4xl w-full text-black">
                <p className="mb-6 text-xl">
                  Founded in our first year at Gyan Ganga Institute of
                  Technology and Sciences, Jabalpur, our e-Newsletter Club was
                  built on a simple idea—creating a space where technology meets
                  creativity.
                </p>
                <p className="mb-6 text-xl">
                  As a team of seven—Khushi Vishwakarma, Palak Jaiswal, Nandan
                  Patkar, Shruti Shrivastav, Udyan Saxena, Shashank Singh
                  Rajput, and Faiz Ansari—we set out to foster discussions on
                  emerging tech trends while also providing a platform for
                  artistic expression through writing, poetry, photography, and
                  design.
                </p>
                <p className="mb-6 text-xl">
                  Over time, our initiative grew into a hub for ideas and
                  innovation, publishing 11-12 online editions and even an
                  offline special edition. While the club has now concluded its
                  journey, this website stands as an archive of our work,
                  preserving the conversations, insights, and creativity that
                  shaped our vision.
                </p>
                <p className="mb-6 text-xl">
                  Genesis is not just a series of newsletters, it is a
                  collection of memories, milestones, and the unwavering spirit
                  of teamwork. This archive stands as a reminder of everything
                  we created together.
                </p>
                <p className="mb-6 text-xl">
                  I, Palak, feel immense gratitude towards my amazing team.
                  Genesis was built through your hard work, passion, and belief
                  in our shared vision. Thank you for being a part of this
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronRight } from 'react-icons/fa';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import { scroller } from 'react-scroll';

import GiveOnlineModal from '../Screens/GiveOnlineModal';

import Logo from '../assets/img/Logos/logowc1.png'

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const SCROLL_OFFSET = -80;

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage && location.hash) {
      const hash = location.hash.substring(1); // Remove the '#' character
      scroller.scrollTo(hash, {
        smooth: true,
        duration: 500,
        offset: SCROLL_OFFSET,
      });
    }
  }, [isHomePage, location.hash]);

  const scrollToHash = (hash) => {
    if (!isHomePage) {
      navigate(`/#${hash}`);
      setTimeout(() => {
        scroller.scrollTo(hash, {
          smooth: true,
          duration: 500,
          offset: SCROLL_OFFSET,
        });
      }, 100); // Delay to ensure the page has navigated
    } else {
      scroller.scrollTo(hash, {
        smooth: true,
        duration: 500,
        offset: SCROLL_OFFSET,
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              <img src={Logo} alt="Logo" className="h-18 w-18 mr-2" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <div
                onClick={() => window.location.href = '/'}
                className="flex items-center text-gray-700 hover:text-[#7EA82C] font-medium transition-colors cursor-pointer"
              >
                Home <FaChevronRight className="h-4 w-4 ml-1 transform group-hover:rotate-90 transition-transform" />
              </div>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <div
                    onClick={() => scrollToHash('home')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                    role="menuitem"
                  >
                    Landing Page
                  </div>
                  <div
                    onClick={() => scrollToHash('about')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                    role="menuitem"
                  >
                    About Us
                  </div>
                  <div
                    onClick={() => scrollToHash('missionVision')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                    role="menuitem"
                  >
                    Mission & Vision
                  </div>
                  <div
                    onClick={() => scrollToHash('whatWeDo')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                    role="menuitem"
                  >
                    What We Do?
                  </div>
                  <div
                    onClick={() => scrollToHash('pastors')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                    role="menuitem"
                  >
                    Pastors
                  </div>
                  <div
                    onClick={() => scrollToHash('ministries')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                    role="menuitem"
                  >
                    Ministries
                  </div>
                  <div
                    onClick={() => scrollToHash('otherPages')}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                    role="menuitem"
                  >
                    Other Websites
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => window.location.href = '/branches'}
              className="text-gray-600 hover:text-[#7EA82C] font-medium transition-colors cursor-pointer"
            >
              Branches
            </div>
            <div
              onClick={() => window.location.href = '/events'}
              className="text-gray-600 hover:text-[#7EA82C] font-medium transition-colors cursor-pointer"
            >
              Events
            </div>
            <div
              onClick={() => window.location.href = '/contact'}
              className="text-gray-600 hover:text-[#7EA82C] font-medium transition-colors cursor-pointer"
            >
              Contact Us
            </div>
          </nav>

          <div className="hidden md:flex">
          <div
            role="button"
            tabIndex={0}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-white font-medium bg-[#6B8E23] hover:bg-[#7EA82C] transition-colors cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Give Online
          </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
          <div
              role="button"
              tabIndex={0}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#4A4A48] focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6 text-[#7EA82C]" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-20 inset-x-0 bg-white shadow-lg transition transform origin-top ${isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          <Collapsible className="grid gap-4">
          <CollapsibleTrigger className="flex w-full items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 [&[data-state=open]>svg]:rotate-90">
            Home <FaChevronRight className="ml-auto h-5 w-5 transition-all" />
          </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="grid gap-1 pl-6">
                <div
                  onClick={() => {
                    scrollToHash('home');
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                >
                  Landing Page
                </div>
                <div
                  onClick={() => {
                    scrollToHash('about');
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                >
                  About Us
                </div>
                <div
                  onClick={() => {
                    scrollToHash('missionVision');
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                >
                  Mission & Vision
                </div>
                <div
                  onClick={() => {
                    scrollToHash('whatWeDo');
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                >
                  What We Do?
                </div>
                <div
                  onClick={() => {
                    scrollToHash('pastors');
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                >
                  Pastors
                </div>
                <div
                  onClick={() => {
                    scrollToHash('ministries');
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                >
                  Ministries
                </div>
                <div
                  onClick={() => {
                    scrollToHash('otherPages');
                    setIsMenuOpen(false);
                  }}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
                >
                  Other Websites
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* other links */}
          <div className="space-y-1 px-2">
            <div
              onClick={() => {
                window.location.href = '/branches';
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
            >
              Branches
            </div>
            <div
              onClick={() => {
                window.location.href = '/events';
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
            >
              Events
            </div>
            <div
              onClick={() => {
                window.location.href = '/contact';
                setIsMenuOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-[#7EA82C] cursor-pointer"
            >
              Contact Us
            </div>
          </div>

          {/* Give Online Button */}
          <div
            role="button"
            tabIndex={0}
            className="block w-full text-center px-5 py-3 mt-4 rounded-full text-white font-medium bg-[#6B8E23] hover:bg-[#7EA82C]"
            onClick={() => setIsModalOpen(true)} 
          >
            Give Online
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
  <GiveOnlineModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
)}
    </header>
  );
}

export default Nav;

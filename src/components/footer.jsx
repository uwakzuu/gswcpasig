import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import Gpro from '../assets/img/Logos/GproLogo.png';
import GlobalSurge from '../assets/img/Logos/GlobalSurgeLogo.png';
import Connection from '../assets/img/Logos/ConnectionLogo.png';
import BigJ from '../assets/img/Logos/BigJLogo.png';

export default function Footer() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = (path) => {
    navigate(path); // Use navigate to change routes
  };

  const handleExternalNavigation = (url) => {
    window.open(url, '_blank'); // Open external links in a new tab
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div
              onClick={() => handleNavigation('/')}
              className="text-2xl font-bold mb-4 block cursor-pointer"
            >
              Global Surge Worship Center Pasig
            </div>
            <p className="text-gray-400 mb-4">
              Building beautiful websites with modern design and powerful functionality.
            </p>
            <p className="text-gray-400">© {new Date().getFullYear()} Global Surge Inc. All rights reserved.</p>
            {/* Icons Row */}
            <div className="flex space-x-4 mt-4">
              <a href="https://globalsurge.church/" target="_blank" rel="noopener noreferrer">
                <img
                  src={GlobalSurge}
                  alt="Global Surge"
                  className="w-10 h-8 transition-transform duration-300 hover:scale-110"
                />
              </a>
              <a href="http://gpro.22web.org/main.php?i=1" target="_blank" rel="noopener noreferrer">
                <img
                  src={Gpro}
                  alt="Gpro"
                  className="w-10 h-8 transition-transform duration-300 hover:scale-110"
                />
              </a>
              <a href="https://connection-ministry.me/index.html" target="_blank" rel="noopener noreferrer">
                <img
                  src={Connection}
                  alt="Connection"
                  className="w-10 h-8 transition-transform duration-300 hover:scale-110"
                />
              </a>
              <a href="https://bigjdance.live/?i=1" target="_blank" rel="noopener noreferrer">
                <img
                  src={BigJ}
                  alt="BigJ"
                  className="w-10 h-8 transition-transform duration-300 hover:scale-110"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4"></h3>
            <ul className="space-y-2"></ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Pages</h3>
            <ul className="space-y-2">
              <li
                onClick={() => handleNavigation('/')}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Home
              </li>
              <li
                onClick={() => handleNavigation('/branches')}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Branches
              </li>
              <li
                onClick={() => handleNavigation('/events')}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Events
              </li>
              <li
                onClick={() => handleNavigation('/contact')}
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Contact Us
              </li>
            </ul>
          </div>

          <div className='space-y-2'>
            <h3 className="text-lg font-semibold mb-4">Services:</h3>
            <p className='text-gray-400'>
              Sunday: 9AM
            </p>
            <p className='text-gray-400'>
              Sunday: 11AM
            </p>
            <p className='text-gray-400'>
              Sunday: 4PM
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-4">
            Designed and built with ❤️ by the Global Surge Team
          </p>
          <div className="flex space-x-6 text-xl">
            <div
              onClick={() => handleExternalNavigation('https://facebook.com/gswcpasig')}
              className="text-[#7EA82C] hover:text-[#5EA82C] transition-colors cursor-pointer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </div>
            <div
              onClick={() => handleExternalNavigation('https://www.youtube.com/@GlobalSurgeOfficial')}
              className="text-[#7EA82C] hover:text-[#5EA82C] transition-colors cursor-pointer"
              aria-label="Youtube"
            >
              <FaYoutube />
            </div>
            <div
              onClick={() => handleExternalNavigation('https://instagram.com/gswcpasig')}
              className="text-[#7EA82C] hover:text-[#5EA82C] transition-colors cursor-pointer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
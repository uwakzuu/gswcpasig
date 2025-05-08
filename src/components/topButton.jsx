// BackToTopButton.js
import React, { useState, useEffect } from 'react';
// import { FaArrowUp } from 'react-icons/fa';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-22 right-6 z-50">
      {isVisible && (
        <div
        onClick={scrollToTop}
        className="cursor-pointer relative after:content-['scroll_to_top'] after:text-white after:absolute after:text-nowrap after:scale-0 hover:after:scale-100 after:duration-200 w-12 h-12 rounded-full border-1 border-emerald-200 bg-gradient-to-r from-[#6B8E23] to-[#7EA82C] hover:from-[#7EA82C] hover:to-[#8BC53F] pointer flex items-center justify-center duration-300 hover:rounded-[50px] hover:w-26 group/button overflow-hidden active:scale-90"
      >
        <svg
          className="w-3 fill-white delay-50 duration-200 group-hover/button:-translate-y-12"
          viewBox="0 0 384 512"
        >
          <path
            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
          ></path>
        </svg>
      </div>
      )}
    </div>
  );
}

export default BackToTopButton;

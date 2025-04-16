import React, { useEffect, useRef, useState } from "react"

import LandingImage from "../assets/img/LandingImage.jpg";
import DefaultImg from "../assets/img/defaultIMG.jpg";

import { FaPhoneAlt, FaMapMarkerAlt  } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";

import { PersonsData } from "../data/personsData";

function LandingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null);

  const getImageSrc = (src) => src || DefaultImg;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen mt-[64px]">
      {/* Hero Section with overflow hidden to prevent overlap */}
      <div className="relative h-[calc(100vh-64px)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${LandingImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-0" />

          {/* Content */}
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg">Explore our features and offerings.</p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="bg-white text-gray-800 py-8 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Right Section: Image Container */}
          <div className="md:w-1/2 flex justify-center items-center mb-8 md:mb-0 md:mr-4">
            <img src={getImageSrc()} alt="About Us" className="w-full h-72 bg-gray-200 rounded-lg" />
          </div>

          {/* Left Section: Text */}
          <div className="md:w-1/2 md:ml-4">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              We are a company dedicated to providing the best services and products to our customers.
              Our team is committed to excellence and innovation, ensuring that we meet the needs of our clients
              and exceed their expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section ref={sectionRef} className="py-16 px-4 bg-gray-100 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Our Mission & Vision</h2>

        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Mission Container - Left */}
          <div
            className={`flex-1 relative transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } group`}
          >
            <div
              className="absolute inset-0 bg-emerald-600 transform skew-x-6 shadow-lg transition-all duration-300 
              group-hover:shadow-xl group-hover:bg-emerald-700 group-hover:scale-105 group-hover:-rotate-1"
            ></div>
            <div className="relative z-10 p-8 transform -skew-x-6 h-full flex flex-col justify-center transition-all duration-300">
              <div className="transform skew-x-6 transition-all duration-300 group-hover:translate-y-[-5px]">
                <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-emerald-200 group-hover:scale-105">
                  Our Mission
                </h3>
                <p className="text-white/90 transition-all duration-300 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
                  enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat
                  nisl ut dapibus. Mauris iaculis porttitor posuere.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Container - Right */}
          <div
            className={`flex-1 relative transition-all duration-1000 transform ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } group`}
            style={{ transitionDelay: "200ms" }}
          >
            <div
              className="absolute inset-0 bg-purple-600 transform skew-x-6 shadow-lg transition-all duration-300 
              group-hover:shadow-xl group-hover:bg-purple-700 group-hover:scale-105 group-hover:rotate-1"
            ></div>
            <div className="relative z-10 p-8 transform -skew-x-6 h-full flex flex-col justify-center transition-all duration-300">
              <div className="transform skew-x-6 transition-all duration-300 group-hover:translate-y-[-5px]">
                <h3 className="text-2xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-purple-200 group-hover:scale-105">
                  Our Vision
                </h3>
                <p className="text-white/90 transition-all duration-300 group-hover:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                  sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla
                  enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat
                  nisl ut dapibus. Mauris iaculis porttitor posuere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* What We Do Section */}
      <section className="bg-white text-gray-800 py-8 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* First Container: 30% Width */}
          <div className="md:w-3/10 mb-8 md:mb-0 md:mr-4 flex flex-col items-start bg-white p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">What We Do?</h3>
            <p className="text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>

          {/* Second Container: 35% Width */}
          <div className="md:w-7/20 mb-8 md:mb-0 md:mr-4 flex flex-col items-start bg-white p-4 rounded-lg">
            <div className="flex flex-col space-y-4">
              {/* Image Row 1 */}
              <div className="flex items-center space-x-4">
                <img src={getImageSrc("")} alt="Image 1" className="w-16 h-16 rounded-full" />
                <p className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              {/* Image Row 2 */}
              <div className="flex items-center space-x-4">
                <img src={getImageSrc("")} alt="Image 2" className="w-16 h-16 rounded-full" />
                <p className="text-base">
                  Integer nec odio. Praesent libero.
                </p>
              </div>
              {/* Image Row 3 */}
              <div className="flex items-center space-x-4">
                <img src={getImageSrc("")} alt="Image 3" className="w-16 h-16 rounded-full" />
                <p className="text-base">
                  Sed cursus ante dapibus diam.
                </p>
              </div>
            </div>
          </div>

          {/* Third Container: 35% Width */}
          <div className="md:w-7/20 flex flex-col items-start bg-white p-4 rounded-lg">
            <div className="flex flex-col space-y-4">
              {/* Image Row 1 */}
              <div className="flex items-center space-x-4">
                <img src={getImageSrc("")} alt="Image 4" className="w-16 h-16 rounded-full" />
                <p className="text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              {/* Image Row 2 */}
              <div className="flex items-center space-x-4">
                <img src={getImageSrc("")} alt="Image 5" className="w-16 h-16 rounded-full" />
                <p className="text-base">
                  Integer nec odio. Praesent libero.
                </p>
              </div>
              {/* Image Row 3 */}
              <div className="flex items-center space-x-4">
                <img src={getImageSrc("")} alt="Image 6" className="w-16 h-16 rounded-full" />
                <p className="text-base">
                  Sed cursus ante dapibus diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Personalities Section */}
    <section className="bg-gray-100 text-gray-800 py-8 px-4 md:px-8">
      <div className="flex flex-wrap justify-center gap-6">
        {PersonsData.map((person, index) => (
          <div
            key={index}
            className="profile-card w-[280px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group"
          >
            <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
              <div className="img_container w-full flex items-center justify-center relative z-10 after:absolute after:h-[6px] after:w-full after:bg-[#58b0e0] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#58b0e0] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                <img
                  src={person.pfp} // Use the person's profile picture here
                  alt="Profile"
                  className="w-36 h-36 object-cover rounded-full border-2 border-gray-100 group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300 z-20"
                />
                <div className="absolute bg-[#58b0e0] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
              </div>
            </div>
            <div className="headings *:text-center *:leading-4">
              <p className="text-xl font-serif font-semibold text-[#434955]">{person.name}</p>
              <p className="text-sm font-semibold text-[#434955]">{person.position}</p>
            </div>
            <div className="w-full items-center justify-start flex px-6 py-2">
              <ul className="flex flex-col items-start gap-2 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
                <li>
                  <FaPhoneAlt className="text-stone-700 group-hover:text-[#58b0e0]" size={15} />
                  <p>{person.phoneNum}</p>
                </li>
                <li>
                  <SiGmail className="text-stone-700 group-hover:text-[#58b0e0]" size={15} />
                  <p>{person.gmailEmail}</p>
                </li>
                <li>
                  <PiMicrosoftOutlookLogoFill className="text-stone-700 group-hover:text-[#58b0e0]" size={15} />
                  <p>{person.outlookEmail}</p>
                </li>
                <li>
                  <FaMapMarkerAlt className="text-stone-700 group-hover:text-[#58b0e0]" size={15} />
                  <p>{person.Address}</p>
                </li>
              </ul>
            </div>
            <hr className="w-full hover:h-5 h-3 bg-[#58b0e0] hover:transition-all hover:duration-300 transition-all duration-300" />
          </div>
        ))}
      </div>
    </section>

    </div>
  );
}

export default LandingPage;
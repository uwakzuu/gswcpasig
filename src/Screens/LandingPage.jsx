import React, { useEffect, useRef, useState } from "react"

import LandingImage from "../assets/img/LandingImage.jpg";
import DefaultImg from "../assets/img/defaultIMG.jpg";
import gswcBG from "../assets/img/BG/gswcBG.jpg";
import Discipleship from "../assets/img/WhatWeDo/Discipleship.jpg";
import CommunityGroup from "../assets/img/WhatWeDo/CommunityGroup.jpg";
import CelebrationService from "../assets/img/WhatWeDo/SundayService.jpg";
import Baptism from "../assets/img/WhatWeDo/Baptism.jpg";
import Unwind from "../assets/img/WhatWeDo/Unwind.jpg";
import Workshop from "../assets/img/WhatWeDo/Workshop.jpg";

import { FaArrowDown } from "react-icons/fa";

import ReactPlayer from 'react-player';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { pastorCarouselSettings } from "../components/carouselSettings";

import { PastorsData } from "../data/pastorsData";
import { ministriesData } from "../data/ministriesData";

function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleSections, setVisibleSections] = useState({
    about: false,
    whatWeDo: false,
    pastors: false,
    missionVision: false,
    ministries: false,
  });
  const aboutRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const pastorsRef = useRef(null);
  const missionVisionRef = useRef(null);
  const ministriesRef = useRef(null);

  useEffect(() => {
    const refs = [
      { ref: aboutRef, key: "about" },
      { ref: whatWeDoRef, key: "whatWeDo" },
      { ref: pastorsRef, key: "pastors" },
      { ref: missionVisionRef, key: "missionVision" },
      { ref: ministriesRef, key: "ministries" },
    ];
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const key = refs.find(r => r.ref.current === entry.target).key;
            setVisibleSections(prev => ({ ...prev, [key]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
  
    refs.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });
  
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleHover = (index) => {
    if (isMobile) {
      setHoveredIndex(hoveredIndex === index ? null : index);
    }
  };
  
  return (
    <div id="home" className="flex flex-col min-h-screen mt-[64px] overflow-hidden">
      {/* Hero Section with overflow hidden to prevent overlap */}
      <div className="relative h-[calc(100vh-64px)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center flex flex-col items-center justify-center"
          style={{ backgroundImage: `url(${LandingImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 z-0" />

          {/* Content */}
          <div className="relative z-10 text-center text-white px-2">
            <h2 className="text-2xl sm:text-6xl font-bold mb-4">WORSHIP CENTER PASIG</h2>
            <p className="text-md sm:text-2xl">Lifting people up with positive answers to life.</p>
            <div
              className="text-white sm:text-xl text-lg flex justify-center pt-6 pb-2 transition-colors cursor-pointer animate-bounce"
            >
              <FaArrowDown />
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => window.location.href = '/contact'}
              className="hover:brightness-110 transition:opacity-90 w-35 justify-self-center hover:animate-pulse font-bold py-3 px-2 rounded-full bg-gradient-to-tr from-lime-500 via-lime-500 to-lime-600 text-white cursor-pointer"
            >
              Need Prayer?
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section
        id = "about"
        ref={aboutRef}
        className={`bg-white text-gray-800 py-8 px-4 md:px-8 transition-all duration-1000 transform ${
          visibleSections.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Right Section: Video Container */}
        <div className="md:w-1/2 w-full flex justify-center items-center mb-8 md:mb-0 md:mr-4 relative">
      {/* Player Container with consistent aspect ratio */}
      <div className="relative w-full aspect-video bg-gray-200 rounded-xl overflow-hidden">
        {/* Thumbnail Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 rounded-xl">
            <img
              src={gswcBG}
              alt="Thumbnail"
              className="w-full h-full object-cover absolute inset-0 z-0 rounded-xl"
            />
            <div
              onClick={() => setIsPlaying(true)}
              className="z-20 cursor-pointer flex items-center justify-center w-20 h-20 text-4xl rounded-full bg-gradient-to-tr from-lime-500 via-lime-500 to-lime-600 text-white transform transition-transform duration-300 hover:scale-125 focus:scale-125"
              style={{
                animation: 'pulse-custom 1.2s cubic-bezier(0.8, 0, 0, 1) infinite',
                boxShadow: 'rgba(193, 244, 246, 0.698) 0px 0px 0px 0px',
              }}
            >
              ▶
            </div>
          </div>
        )}

        {/* Video Player */}
        {isPlaying && (
          <ReactPlayer
            url="https://vimeo.com/493245601"
            width="100%"
            height="100%"
            playing
            controls
          />
        )}
      </div>
    </div>

          {/* Left Section: Text */}
          <div className="md:w-1/2 md:ml-4 justify-items-center">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="w-12 h-1 bg-[#7EA82C] mx-auto rounded-full"></div>
            <p className="text-lg font-medium pt-6">
              Global Surge Worship Center Pasig is a local church dedicated to sharing the love of Christ with the city. As part of the Global Surge network, our mission is to present Christ in a creative, credible, and caring way to the people of Pasig, with a special focus on young urban communities.
              <br /><br />
              We gather each week in a welcoming and contemporary environment where you can experience heartfelt worship, hear life-changing messages from God's Word, and grow alongside a passionate community of believers.
              <br /><br />
              At GSWC Pasig, our mission is to equip and empower every believer to live out their faith and share it with others. We are actively building a movement of Community Group-based churches, both locally and globally, starting right here in Pasig.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section
        id = "missionVision"
        ref={missionVisionRef}
        className={`bg-[#7EA82C]/10 py-8 px-4 md:px-8 transition-all duration-1000 transform ${
          visibleSections.missionVision ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
      <div className="w-full max-w-screen-xl xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Our Mission & Vision</h2>
        <div className="w-12 h-1 bg-[#7EA82C] mx-auto rounded-full"></div>
        <div className="flex flex-col md:flex-row gap-8 items-stretch pt-6">
          {/* Mission Container - Left */}
          <div
            className={`flex-1 relative transition-all duration-1000 transform ${
              visibleSections.missionVision ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
            } group`}
          >
            <div
              className="absolute inset-0 bg-[#7EA82C] transform skew-x-6 shadow-lg transition-all duration-300 
              group-hover:shadow-xl group-hover:[#6B8E23] group-hover:scale-105 group-hover:-rotate-1"
            ></div>
            <div className="relative z-10 p-8 transform -skew-x-6 h-full flex flex-col justify-center transition-all duration-300">
              <div className="transform skew-x-6 transition-all duration-300 group-hover:translate-y-[-5px]">
                {/* Ribbon Banner for Mission */}
                <div className="relative -top-5 left-0 right-0 z-20 pr-8 pb-6 flex justify-center">
                <div className="ribbon-wrapper w-[180px] sm:w-[200px] lg:w-[240px] xl:w-[260px] relative">
                    <div className="ribbon bg-[#4A4A48] w-full text-center shadow-md relative">
                      <div className="ribbon-stitches-top border-t border-dashed border-black/20 mt-0.5 shadow-[0_0_2px_rgba(255,255,255,0.5)]"></div>
                      <div className="ribbon-content relative">
                        <span className="text-white text-shadow py-2 px-2 block text-2xl font-bold">
                          Our Mission
                        </span>
                      </div>
                      <div className="ribbon-stitches-bottom border-t border-dashed border-black/20 mb-0.5 shadow-[0_0_2px_rgba(255,255,255,0.3)]"></div>

                      {/* Pseudo elements for ribbon tails - using actual elements since we can't use ::before/::after in JSX */}
                      <div className="absolute -bottom-1 -left-8 border-[1.5em] border-solid border-[#4A4A48] border-l-transparent z-[-1] shadow-[1px_1px_1px_rgba(0,0,0,0.4)]"></div>
                      <div className="absolute -bottom-1 -right-8 border-[1.5em] border-solid border-[#4A4A48] border-r-transparent z-[-1] shadow-[-1px_1px_1px_rgba(0,0,0,0.4)]"></div>
                    </div>
                  </div>
                </div>

                <p className="text-white/90 transition-all duration-300 group-hover:text-white font-medium md:text-lg xl:text-xl max-w-prose mx-auto">
                  We Believe In <strong style={{ fontWeight: '900'}}>A Great Commitment</strong> 
                  <br/><br/> To The <strong style={{ fontWeight: '900'}}>Great Commission</strong> 
                  <br/><br/> And The <strong style={{ fontWeight: '900'}}>Great Commandment</strong> 
                  <br/><br/> Will Grow A <strong style={{ fontWeight: '900'}}>Great Church</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Vision Container - Right */}
          <div
            className={`flex-1 relative transition-all duration-1000 transform ${
              visibleSections.missionVision ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
            } group`}
            style={{ transitionDelay: "200ms" }}
          >
            <div
              className="absolute inset-0 bg-[#4A4A48] transform skew-x-6 shadow-lg transition-all duration-300 
              group-hover:shadow-xl group-hover:[#4A4A48] group-hover:scale-105 group-hover:rotate-1"
            ></div>
            <div className="relative z-10 p-8 transform -skew-x-6 h-full flex flex-col justify-center transition-all duration-300">
              <div className="transform skew-x-6 transition-all duration-300 group-hover:translate-y-[-5px]">
                {/* Ribbon Banner for Vision */}
                <div className="relative -top-5 left-0 right-0 z-20 pr-8 flex justify-center">
                <div className="ribbon-wrapper w-[180px] sm:w-[200px] lg:w-[240px] xl:w-[260px] relative">
                    <div className="ribbon bg-[#7EA82C] w-full text-center shadow-md relative">
                      <div className="ribbon-stitches-top border-t border-dashed border-black/20 mt-0.5 shadow-[0_0_2px_rgba(255,255,255,0.5)]"></div>
                      <div className="ribbon-content relative">
                        <span className="text-white text-shadow py-2 px-2 block text-2xl font-bold">
                          Our Vision
                        </span>
                      </div>
                      <div className="ribbon-stitches-bottom border-t border-dashed border-black/20 mb-0.5 shadow-[0_0_2px_rgba(255,255,255,0.3)]"></div>

                      {/* Pseudo elements for ribbon tails - using actual elements since we can't use ::before/::after in JSX */}
                      <div className="absolute -bottom-1 -left-8 border-[1.5em] border-solid border-[#7EA82C] border-l-transparent z-[-1] shadow-[1px_1px_1px_rgba(0,0,0,0.4)]"></div>
                      <div className="absolute -bottom-1 -right-8 border-[1.5em] border-solid border-[#7EA82C] border-r-transparent z-[-1] shadow-[-1px_1px_1px_rgba(0,0,0,0.4)]"></div>
                    </div>
                  </div>
                </div>

                <p className="text-white/90 transition-all duration-300 group-hover:text-white font-medium md:text-lg">
                  To Present Christ In A Creative, Contemporary, Credible, And Caring Way To Young Urban Residents. 
                  <br/><br/> To Establish A Community Of Believers Each Equipped And Committed To Minister Effectively To Those Around Them.
                  <br/><br/> To Actively Pursue The Planting Of Community Group Based Churches In Local And Foreign Centers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* What We Do Section */}
      <section
        id = "whatWeDo"
        ref={whatWeDoRef}
        className={`bg-white text-gray-800 py-8 px-4 md:px-8 transition-all duration-1000 transform ${
          visibleSections.whatWeDo ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* First Container: 30% Width */}
          <div className="md:w-3/10 mb-8 md:mb-0 md:mr-4 flex flex-col items-start bg-white p-4 rounded-lg">
            <h3 className="text-3xl font-bold mb-2 self-center">What We Do?</h3>
            <div className="w-12 h-1 bg-[#7EA82C] mx-auto rounded-full"></div>
            <p className="text-lg font-medium self-center pt-6">
            Global Surge Worship Center Pasig is active in many areas of ministry, serving both our congregation and the wider community.
            </p>
          </div>

          {/* Second Container: 35% Width */}
          <div className="md:w-7/20 mb-8 md:mb-0 md:mr-4 flex flex-col items-start bg-white p-4 rounded-lg">
            <div className="flex flex-col space-y-4">
              {/* Image Row 1 */}
              <div className="flex items-center space-x-4">
                <img src={Discipleship} alt="Image 1" className="w-24 h-24 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" />
                <div className="flex-col">
                  <h5 className="relative pl-2 mb-2 font-bold sm:text-xl before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-[#7EA82C] rounded-full">
                    DISCIPLESHIP
                  </h5>
                  <p className="text-sm sm:text-base">
                  Go deeper in your faith journey through life-changing conversations and personal spiritual growth with a mentor who walks with you.
                  </p>
                </div>
              </div>
              {/* Image Row 2 */}
              <div className="flex items-center space-x-4">
                <img src={CommunityGroup} alt="Image 2" className="w-24 h-24 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" />
                <div className="flex-col">
                  <h5 className="relative pl-2 mb-2 font-bold sm:text-xl before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-[#7EA82C] rounded-full">
                    COMMUNITY GROUP
                  </h5>
                  <p className="text-sm sm:text-base">
                  Find your people! Share life, laughter, and God’s Word in a warm, supportive circle where real connections happen.
                  </p>
                </div>
              </div>
              {/* Image Row 3 */}
              <div className="flex items-center space-x-4">
                <img src={CelebrationService} alt="Image 3" className="w-24 h-24 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" />
                <div className="flex-col">
                  <h5 className="relative pl-2 mb-2 font-bold sm:text-xl before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-[#7EA82C] rounded-full">
                    CELEBRATION SERVICE
                  </h5>
                  <p className="text-sm sm:text-base">
                  Experience powerful worship, inspiring messages, and the joy of coming together as one big family to lift up Jesus!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Third Container: 35% Width */}
          <div className="md:w-7/20 flex flex-col items-start bg-white p-4 rounded-lg">
            <div className="flex flex-col space-y-4">
              {/* Image Row 1 */}
              <div className="flex items-center space-x-4">
                <img src={Baptism} alt="Image 4" className="w-24 h-24 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" />
                <div className="flex-col">
                  <h5 className="relative pl-2 mb-2 font-bold sm:text-xl before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-[#7EA82C] rounded-full">
                    BAPTISM
                  </h5>
                  <p className="text-sm sm:text-base">
                  Declare your new life in Christ in this unforgettable, public celebration of faith and transformation.
                  </p>
                </div>
              </div>
              <br/>
              {/* Image Row 2 */}
              <div className="flex items-center space-x-4">
                <img src={Unwind} alt="Image 5" className="w-24 h-24 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" />
                <div className="flex-col">
                  <h5 className="relative pl-2 mb-2 font-bold sm:text-xl before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-[#7EA82C] rounded-full">
                    UNWIND
                  </h5>
                  <p className="text-sm sm:text-base">
                    Chill, laugh, and recharge with friends! Unwind is your space to relax, have fun, and build meaningful friendships.
                  </p>
                </div>
              </div>
              {/* Image Row 3 */}
              <div className="flex items-center space-x-4">
                <img src={Workshop} alt="Image 6" className="w-24 h-24 rounded-full object-cover transform transition-transform duration-300 hover:scale-105" />
                <div className="flex-col">
                  <h5 className="relative pl-2 mb-2 font-bold sm:text-xl before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-[#7EA82C] rounded-full">
                    WORKSHOP
                  </h5>
                  <p className="text-sm sm:text-base">
                  Get equipped and empowered! Dive into hands-on learning that sharpens your skills and fuels your passion to serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    {/* Pasig Pastors Section */}
    <section
      id="pastors"
      ref={pastorsRef}
      className={`bg-[#7EA82C]/10 py-8 px-4 md:px-8 transition-all duration-1000 transform ${
        visibleSections.pastors ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-4">Our Pastors at GSWC Pasig</h2>
      <div className="w-12 h-1 bg-[#7EA82C] mx-auto rounded-full mb-6"></div>
      <Slider {...pastorCarouselSettings}>
        {PastorsData.filter(pastor => pastor.church === "Worship Center - Pasig").map((pastor, index) => (
          <div
            key={index}
            className="w-full max-w-[280px] 2xl:max-w-[350px] rounded-md overflow-hidden bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group mx-auto ml-10 sm:ml-2"
          >
            <div className="avatar w-full pt-5 flex items-center justify-center flex-col gap-1">
              <div className="img_container w-full flex items-center justify-center relative z-10 after:absolute after:h-[6px] after:w-full after:bg-[#7EA82C] after:top-4 after:group-hover:size-[1%] after:delay-300 after:group-hover:delay-0 after:group-hover:transition-all after:group-hover:duration-300 after:transition-all after:duration-300 before:absolute before:h-[6px] before:w-full before:bg-[#7EA82C] before:bottom-4 before:group-hover:size-[1%] before:delay-300 before:group-hover:delay-0 before:group-hover:transition-all before:group-hover:duration-300 before:transition-all before:duration-300">
                <img
                  src={pastor.img || DefaultImg}
                  alt="Profile"
                  className="w-36 h-36 object-cover rounded-full border-2 border-gray-100 group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300 z-20"
                />
                <div className="absolute bg-[#7EA82C] z-10 size-[60%] w-full group-hover:size-[1%] group-hover:transition-all group-hover:duration-300 transition-all duration-300 delay-700 group-hover:delay-0"></div>
              </div>
            </div>
            <div className="headings text-center leading-4">
              <p className="text-xl font-serif font-semibold text-[#434955] mt-2 line-clamp-2 mx-2">{pastor.name}</p>
              <p className="text-lg font-medium text-[#434955] mb-2 px-2">{pastor.position}</p>
              <p className="text-sm font-medium text-[#434955] px-2">{pastor.church}</p>
            </div>
            <div className="w-full items-center justify-start flex px-6 py-2">
            </div>
            <hr className="w-full h-3 bg-[#7EA82C] hover:transition-all hover:duration-300 transition-all duration-300" />
          </div>
        ))}
      </Slider>
    </section>

    <section
      id="ministries"
      ref={ministriesRef}
      className={`bg-white py-8 px-1 md:px-8 transition-all duration-1000 transform ${
        visibleSections.ministries
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-4">Ministries</h2>
      <div className="w-12 h-1 bg-[#7EA82C] mx-auto rounded-full mb-6"></div>

      <div className="flex flex-wrap justify-center gap-2">
      {ministriesData.map((ministry, index) => {
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            onClick={() => toggleHover(index)}
            className="relative group duration-500 cursor-pointer overflow-hidden text-gray-50 sm:h-44 sm:w-56 h-68 w-84 rounded-2xl hover:duration-700 duration-700"
          >
            <div className="sm:h-44 sm:w-56 h-68 w-84 text-gray-800 border border-gray-300">
              <img
                src={ministry.img}
                alt={ministry.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className={`absolute bg-[#7EA82C] sm:w-56 w-84 p-4 py-6 flex flex-col gap-1 duration-500 ${
                isMobile
                  ? isHovered
                    ? "bottom-0"
                    : "-bottom-24"
                  : "group-hover:bottom-0 -bottom-24 group-hover:duration-600"
              }`}
            >
              <span className="text-gray-800 font-bold text-md text-start mt-[-.5rem] mx-[-.5rem]">
                {ministry.name}
              </span>
              <p className="text-neutral-800 text-sm mx-[-.5rem]">
                {ministry.desc ||
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
              </p>
            </div>
          </div>
        );
      })}
    </div>
    </section>

    </div>
  );
}

export default LandingPage;
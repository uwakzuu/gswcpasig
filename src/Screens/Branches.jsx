// Importing necessary hooks and components
import { useState, useEffect } from "react"; // React hooks for state and lifecycle management
import NearestBranchFinder from "../components/nearBranchFinder"; // Component to find the nearest branch
import { BranchesData } from "../data/branchesData"; // Data for branches
import DefaultImg from "../assets/img/defaultIMG.jpg"; // Default image for branches
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"; // Font Awesome icons for UI elements

// Main component for displaying branches
export default function Branches() {
  // State to track the currently active branch ID
  const [activeBranchId, setActiveBranchId] = useState(null);
  // State to determine if the view is on a mobile device
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle window resize events and update mobile state
  useEffect(() => {
    // Function to check if the window width is less than or equal to 768px
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check on component mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to toggle the overlay for a branch on mobile view
  const handleOverlayToggle = (branchId) => {
    if (isMobile) {
      // Toggle the active branch ID if in mobile view
      setActiveBranchId((prevId) => (prevId === branchId ? null : branchId));
    }
  };

  return (
    <main className="flex flex-col min-h-screen mt-[64px] overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Multiple Locations, One Church</h2>
        <div className="w-12 h-1 bg-[#7EA82C] mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-muted-foreground">
          Global Surge Worship Center has multiple campuses to serve our growing community. Each location offers the same message and worship experience with its own unique community.
        </p>
      </div>

      <NearestBranchFinder branches={BranchesData} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16 md:px-12 px-4 pb-12">
        {BranchesData.map((branch) => (
          <div
            key={branch.id}
            onClick={() => handleOverlayToggle(branch.id)}
            className="bg-background rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow"
          >
            <div className="relative h-[350px] overflow-hidden">
              <img
                src={branch.image || DefaultImg}
                alt={branch.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300
                ${isMobile ? (activeBranchId === branch.id ? 'opacity-100' : 'opacity-0') : 'opacity-0 hover:opacity-100'}`}>
                <p
                  onClick={() => {
                    if (isMobile && activeBranchId) {
                      window.open(branch.mapUrl, '_blank');
                    } else if (!isMobile) {
                      window.open(branch.mapUrl, '_blank');
                    }
                  }}
                  className="text-white font-medium bg-black/50 px-4 py-2 rounded-md text-sm cursor-pointer hover:scale-105 active:scale-102">
                  Click for directions
                </p>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-md font-bold mb-2 truncate line-clamp-2">{branch.name}</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="h-4 w-4 mr-2 text-[#7EA82C] mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-4">{branch.address}</span>
                </li>
                <li className="flex items-start">
                  <FaPhoneAlt className="h-4 w-4 mr-2 text-[#7EA82C] mt-0.5 flex-shrink-0" />
                  <span>{branch.phone}</span>
                </li>
                <li className="flex items-start">
                  <FaClock className="h-4 w-4 mr-2 text-[#7EA82C] mt-0.5 flex-shrink-0" />
                  <span className="line-clamp-3">{branch.services}</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
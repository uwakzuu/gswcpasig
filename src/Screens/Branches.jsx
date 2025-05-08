import NearestBranchFinder from "../components/nearBranchFinder";
import { BranchesData } from "../data/branchesData";
import DefaultImg from "../assets/img/defaultIMG.jpg";
import { FaEnvelope, FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Branches() {
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
      {BranchesData.map((branch, index) => (
        <div
          key={branch.id}
          className="bg-background rounded-lg overflow-hidden shadow-sm border hover:shadow-md transition-shadow"
        >
          <a href={branch.mapUrl} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative h-[350px] overflow-hidden">
              <img
                src={ branch.image || DefaultImg }
                alt={branch.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium bg-black/50 px-4 py-2 rounded-md text-sm">Click for directions</p>
              </div>
            </div>
          </a>

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

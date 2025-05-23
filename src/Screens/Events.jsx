import { EventsData } from "../data/eventsData";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import DefaultImg from "../assets/img/defaultIMG.jpg";

export default function Events() {
  return (
    <main className="flex flex-col min-h-screen mt-[64px] overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Involved</h2>
        <div className="w-12 h-1 bg-[#7EA82C] mx-auto rounded-full mb-4"></div>
        <p className="text-lg text-muted-foreground">
          There's something for everyone at Global Surge Worship Center - Pasig. Check out our upcoming events and join us!
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-12 px-4 pb-12 ">
        {EventsData.map((event) => (
          <div
            key={event.id}
            className="bg-background rounded-lg overflow-hidden shadow-sm border transform transition-transform duration-300 hover:scale-105 hover:shadow-md"
          >
            <div className="relative h-48 w-full">
              <img
                src={event.image}
                alt={event.title}
                className="object-contain h-full w-full border-b"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start text-sm">
                  <FaCalendarAlt className="h-4 w-4 mr-2 text-[#7EA82C] mt-0.5" />
                  <span>{event.date}</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaClock className="h-4 w-4 mr-2 text-[#7EA82C] mt-0.5" />
                  <span>{event.time}</span>
                </li>
                <li className="flex items-start text-sm">
                  <FaMapMarkerAlt className="h-4 w-4 mr-2 text-[#7EA82C] mt-0.5" />
                  <span>{event.location}</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm mb-4">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

import { useState, useEffect } from "react";
import { EventsData } from "../data/eventsData";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import ConfirmationModal from "./confirmationModal";

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeEventId, setActiveEventId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOverlayToggle = (EventId) => {
    if (isMobile) {
      setActiveEventId((prevId) => (prevId === EventId ? null : EventId));
    }
  };

  const handleSaveDateClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const downloadICS = () => {
    if (!selectedEvent) return;

    const { title, location, date, time } = selectedEvent;

    let startDate = new Date();

    // Recurring rule setup
    let isRecurring = false;
    let rrule = "";

    if (date.includes("Every Sunday")) {
      startDate.setDate(startDate.getDate() + ((7 - startDate.getDay()) % 7));
      isRecurring = true;
      rrule = "FREQ=WEEKLY;BYDAY=SU";
    } else if (date.includes("Every Friday")) {
      startDate.setDate(startDate.getDate() + ((5 - startDate.getDay() + 7) % 7));
      isRecurring = true;
      rrule = "FREQ=WEEKLY;BYDAY=FR";
    } else if (date.includes("Every Saturday")) {
      startDate.setDate(startDate.getDate() + ((6 - startDate.getDay() + 7) % 7));
      isRecurring = true;
      rrule = "FREQ=WEEKLY;BYDAY=SA";
    } else if (date.includes("Last Sunday")) {
      const lastDay = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
      while (lastDay.getDay() !== 0) lastDay.setDate(lastDay.getDate() - 1);
      startDate = lastDay;
    } else {
      startDate = new Date(date);
    }

    // Time handling
    const firstTime = time.split("&")[0].trim();
    const [hour, minutePart] = firstTime.split(":");
    const minutes = parseInt(minutePart);
    const isPM = firstTime.toLowerCase().includes("pm");
    let hourNum = parseInt(hour);
    if (isPM && hourNum < 12) hourNum += 12;
    if (!isPM && hourNum === 12) hourNum = 0;
    startDate.setHours(hourNum, minutes, 0);

    const endDate = new Date(startDate);
    endDate.setHours(endDate.getHours() + 1);

    const formatDate = (d) =>
      d.toISOString().replace(/[-:]|\.\d{3}/g, "");

    const ics = `
BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${title}
LOCATION:${location}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
${isRecurring ? `RRULE:${rrule}` : ""}
BEGIN:VALARM
TRIGGER:-PT30M
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM
END:VEVENT
END:VCALENDAR`.trim();

    const blob = new Blob([ics], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${title.replace(/\s+/g, "-").toLowerCase()}.ics`;
    link.click();
    URL.revokeObjectURL(url);
  };

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
            onClick={() => handleOverlayToggle(event.id)}
            className="bg-background rounded-lg overflow-hidden shadow-sm border transform transition-transform duration-300 hover:scale-105 hover:shadow-md"
          >
            <div className="relative h-48 w-full">
              <img
                src={event.image}
                alt={event.title}
                className="object-contain h-full w-full border-b"
              />
              <div className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-300
                ${isMobile ? (activeEventId === event.id ? 'opacity-100' : 'opacity-0') : 'opacity-0 hover:opacity-100'}`}>
                <div 
                  onClick={() => {
                    if (isMobile && activeEventId) {
                      handleSaveDateClick(event);
                    } else if (!isMobile) {
                      handleSaveDateClick(event);
                    }
                  }}
                  className="text-white font-medium bg-black/50 px-4 py-2 rounded-md text-sm cursor-pointer hover:scale-105 active:scale-102"
                >
                  Click to Save Date
                </div>
              </div>
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

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        downloadICS={downloadICS}
      />
    </main>
  );
}

import { useState, useEffect } from "react"; // Importing React hooks for state and lifecycle management
import { EventsData } from "../data/eventsData"; // Importing event data for rendering
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa'; // Importing Font Awesome icons for UI elements
import ConfirmationModal from "./confirmationModal"; // Importing a modal component for confirmation dialogs

export default function Events() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track if the modal is open
  const [selectedEvent, setSelectedEvent] = useState(null); // State to store the currently selected event
  const [activeEventId, setActiveEventId] = useState(null); // State to track the active event ID for mobile view
  const [isMobile, setIsMobile] = useState(false); // State to determine if the view is on a mobile device

  // Effect to handle window resize events and update mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to toggle the overlay for an event on mobile view
  const handleOverlayToggle = (EventId) => {
    if (isMobile) {
      setActiveEventId((prevId) => (prevId === EventId ? null : EventId));
    }
  };

  // Function to handle the click event for saving the date
  const handleSaveDateClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true); 
  };

  // Function to close the modal
  const handleModalClose = () => {
    setIsModalOpen(false); 
    setSelectedEvent(null); 
  };

  // Function to download the event details as an ICS file
  const downloadICS = () => {
    if (!selectedEvent) return; 

    const { title, location, date, time } = selectedEvent; 

    let startDate = new Date(); 

    // Recurring rule setup for events
    let isRecurring = false;
    let rrule = ""; 

    // Determine the start date and recurrence rule based on the event date
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

    // Time handling for the event
    const firstTime = time.split("&")[0].trim(); // Get the first time slot
    const [hour, minutePart] = firstTime.split(":"); // Split into hour and minute
    const minutes = parseInt(minutePart); // Parse minutes
    const isPM = firstTime.toLowerCase().includes("pm"); // Check if time is PM
    let hourNum = parseInt(hour); // Parse hour
    if (isPM && hourNum < 12) hourNum += 12; // Convert PM hour to 24-hour format
    if (!isPM && hourNum === 12) hourNum = 0; // Convert 12 AM to 0 hour
    startDate.setHours(hourNum, minutes, 0); // Set the start date time

    const endDate = new Date(startDate); // Initialize end date
    endDate.setHours(endDate.getHours() + 1); // Set end date time to one hour later

    // Function to format date in ICS format
    const formatDate = (d) =>
      d.toISOString().replace(/[-:]|\.\d{3}/g, "");

    // Create ICS file content
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

    // Create a blob and download the ICS file
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

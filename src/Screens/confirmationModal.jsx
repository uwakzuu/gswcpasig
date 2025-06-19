import React, { useEffect } from "react";

const ConfirmationModal = ({ isOpen, onClose, downloadICS }) => {
   // Effect to handle body overflow when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Prevent scrolling when modal is open
    } else {
      document.body.classList.remove("overflow-hidden"); // Allow scrolling when modal is closed
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Cleanup to ensure scrolling is enabled on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay with black inset background */}
      <div
        className="h-screen fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
        style={{
          boxShadow: "inset 0 0 30px 10px rgba(0, 0, 0, 0.8)",
        }}
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="fixed inset-0 flex justify-center items-center z-50 px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative border-2 self-center top-10 sm:top-10">
          <div
            onClick={onClose}
            className="absolute top-1 right-3 font-bold text-lg text-gray-700 cursor-pointer"
          >
            X
          </div>
          <div className="text-center text-gray-700 mb-4">
            Download ICS file to save the date. Want to continue?
          </div>
          <div className="flex justify-center space-x-4">
            <div
              onClick={() => {
                downloadICS();
                onClose();
              }}
              className="bg-green-500 text-white px-6 py-2 rounded cursor-pointer hover:bg-green-600"
            >
              Yes
            </div>
            <div
              onClick={onClose}
              className="bg-red-500 text-white px-6 py-2 rounded cursor-pointer hover:bg-red-600"
            >
              No
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
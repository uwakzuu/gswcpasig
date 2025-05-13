import React, { useState, useEffect } from "react";
import { giveOnlineData } from "../data/giveOnlineData";
import { Copy } from "lucide-react";

const GiveOnlineModal = ({ isOpen, onClose }) => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const handleCopy = async (text) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for mobile or insecure context
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };
  

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
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative border-2 self-center top-75 sm:top-60">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 font-bold text-lg text-gray-700"
          >
            X
          </button>

          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
            Online Giving
          </h2>
          <div className="w-12 h-1 bg-[#7EA82C] mx-auto rounded-full mb-4" />

          <p className="text-md text-center text-gray-700 mb-4">
            Together, our small acts of generosity can create a big impact.
          </p>

          <hr className="mb-4" />
          <h2 className="text-lg font-bold mb-4 text-center text-gray-700">
            Choose Platform
          </h2>

          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            {giveOnlineData.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedAccount(index)}
                className={`flex flex-col items-center p-2 border rounded cursor-pointer w-20 h-20 justify-center transition-colors ${
                  selectedAccount === index
                    ? "border-[#7EA82C] bg-[#f5f9ee]"
                    : "border-gray-300 hover:border-[#7EA82C] hover:bg-[#f0f8e0] active:bg-[#e0f0d0]"
                }`}
              >
                <img
                  src={item.icon}
                  alt={item.account}
                  className="w-10 h-10 mb-1"
                />
                <span className="text-sm font-medium text-center text-gray-700">
                  {item.account}
                </span>
              </div>
            ))}
          </div>

          {selectedAccount !== null && (
            <div className="mt-6 p-4 border rounded bg-gray-50">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                {giveOnlineData[selectedAccount].name || "No Data"}
              </h3>

              {giveOnlineData[selectedAccount].accountNum && (
                <>
                  <p className="text-sm text-gray-700 mb-2">
                    Account Number:{" "}
                    <span className="font-medium underline">
                      {giveOnlineData[selectedAccount].accountNum}
                    </span>
                  </p>

                  <div className="flex flex-col justify-center sm:justify-end items-center gap-2">
                    <button
                      onClick={() => handleCopy(giveOnlineData[selectedAccount].accountNum)}
                      className="flex items-center rounded-lg gap-1 mt-2 bg-gradient-to-tr from-lime-500 via-lime-500 to-lime-600 hover:from-[#7EA82C] hover:to-[#8BC53F] transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer text-sm text-gray-700 text-black"
                    >
                      <Copy className="w-4 h-4" />
                      <span>Copy</span>
                    </button>
                    {copied && (
                      <span className="text-xs text-green-600">Copied!</span>
                    )}
                  </div>
                </>
              )}
            </div>
          )}

        </div>
      </div>
    </>
  );
};

export default GiveOnlineModal;

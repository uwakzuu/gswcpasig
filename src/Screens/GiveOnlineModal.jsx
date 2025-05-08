import React, { useState, useEffect } from 'react'; 
import { giveOnlineData } from '../data/giveOnlineData';
import { Copy } from 'lucide-react';

const GiveOnlineModal = ({ isOpen, onClose }) => {
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Clear after 1.5s
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 top-60 sm:top-80">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative md:w-3/4 md:max-w-lg border-2">
        <button onClick={onClose} className="absolute top-2 right-2 font-bold text-lg">X</button>
        
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">Online Giving</h2>
        <div className="w-12 h-1 bg-[#7EA82C] mx-auto rounded-full mb-4"></div>
        
        <p className="text-md text-muted-foreground mb-4 text-center text-gray-700">
          Together, our small acts of generosity can create a big impact.
        </p>
        <hr className="mb-4" />
        <h2 className="text-lg font-bold mb-4 text-center text-gray-700">Choose Platform</h2>

        <div className="flex justify-center gap-6 mb-6">
          {giveOnlineData.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedAccount(index)}
              className={`flex flex-col items-center p-2 border rounded cursor-pointer w-20 h-20 justify-center transition-colors ${
                selectedAccount === index
                  ? 'border-[#7EA82C] bg-[#f5f9ee]'
                  : 'border-gray-300 hover:border-[#7EA82C] hover:bg-[#f0f8e0] active:bg-[#e0f0d0]'
              }`}
            >
              <img src={item.icon} alt={item.account} className="w-10 h-10 mb-1" />
              <span className="text-sm font-medium text-center text-gray-700">{item.account}</span>
            </div>
          ))}
        </div>

        {/* Show details only when selected */}
        {selectedAccount !== null && (
          <div className="mt-6 p-4 border rounded bg-gray-50">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">{giveOnlineData[selectedAccount].name || "No Data"}</h3>
            {giveOnlineData[selectedAccount].accountNum && (
              <div className="flex items-center text-sm text-gray-700">
                <p>
                  Account Number: <span className="font-medium">{giveOnlineData[selectedAccount].accountNum}</span>
                </p>
                <button onClick={() => handleCopy(giveOnlineData[selectedAccount].accountNum)} title="Copy">
                  <Copy className="w-4 h-4 text-gray-500 hover:text-[#7EA82C] ml-[-.6rem]" />
                </button>
                {copied && <span className="text-xs text-green-600">Copied!</span>}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GiveOnlineModal;

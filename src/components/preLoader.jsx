import React from 'react';

export default function PreLoader() {
    return (
        <div className="flex flex-col gap-4 w-full h-screen items-center justify-center">
          <div className="w-20 h-20 border-4 border-transparent text-[#7EA82C] text-4xl animate-spin flex items-center justify-center border-t-[#7EA82C] rounded-full">
            <div className="w-16 h-16 border-4 border-transparent text-[#4A4A48] text-2xl animate-spin flex items-center justify-center border-t-[#4A4A48] rounded-full"></div>
          </div>
        </div>
      );
}

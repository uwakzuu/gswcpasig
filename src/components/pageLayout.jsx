// components/PageLayout.jsx
import React from 'react';

function PageLayout({ children }) {
  return (
    <div className="relative pt-20 pb-24 min-h-screen">
      {children}
    </div>
  );
}

export default PageLayout;

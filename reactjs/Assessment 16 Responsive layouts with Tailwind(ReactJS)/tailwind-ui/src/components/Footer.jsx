import React from "react";

const Footer = React.memo(() => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © 2026 TailwindApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
});

export default Footer;
import React from "react";

const Navbar = React.memo(() => {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">TailwindApp</h1>

        <ul className="hidden md:flex gap-6">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Features</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
        </ul>

        <button className="md:hidden bg-white text-indigo-600 px-3 py-1 rounded">
          Menu
        </button>
      </div>
    </nav>
  );
});

export default Navbar;
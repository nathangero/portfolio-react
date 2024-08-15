import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="sticky top-0 bg-blue-500 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">Nathan Geronimo</div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white hover:text-gray-300">About</a>
            <a href="#" className="text-white hover:text-gray-300">Projects</a>
            <a href="#" className="text-white hover:text-gray-300">Resume</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden flex align-middle mt-2 space-y-2">
            <a href="#" className="block text-white hover:text-gray-300">About</a>
            <a href="#" className="block text-white hover:text-gray-300">Projects</a>
            <a href="#" className="block text-white hover:text-gray-300">Resume</a>
          </div>
        )}
      </nav>
    </>
  )
}
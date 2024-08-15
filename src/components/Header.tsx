import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = async (id: string) => {
    // If not on the home page, navigate to home and go to the desired section
    if (location.pathname != "/") {
      navigate("/");

      // Having this pause will give enough time for the browser to find the section id after changing pages
      const pause = (ms: number): Promise<void> => new Promise(resolve => setTimeout(resolve, ms));
      await pause(0);
    }

    // See if the element exists on the page
    const element = document.getElementById(id);

    if (element) {
      setIsOpen(false); // Always close the menu

      const navbarHeight = document.querySelector('nav')?.getBoundingClientRect().height || 0; // Get the navbar height
      const elementPosition = element.getBoundingClientRect().top; // Get the element's topmost part
      const offsetPosition = elementPosition + window.scrollY - navbarHeight; // Calculate the offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav className="sticky top-0 bg-blue-500 p-4 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">Nathan Geronimo</div>
          <div className="hidden md:flex space-x-4">
            <button onClick={() => scrollToSection('about-me')} className="text-white hover:text-gray-300">About</button>
            <button onClick={() => scrollToSection('projects')} className="text-white hover:text-gray-300">Projects</button>
            <NavLink
              to={"/resume"}
              className="text-white hover:text-gray-300"
            >
              Resume
            </NavLink>
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
          <div className="md:hidden mt-2 space-y-2 flex flex-col items-center">
            <button onClick={() => scrollToSection('about-me')} className="block text-white hover:text-gray-300">About</button>
            <button onClick={() => scrollToSection('projects')} className="block text-white hover:text-gray-300">Projects</button>
            <NavLink
              to={"/resume"}
              className="block text-white hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </NavLink>
          </div>
        )}
      </nav >
    </>
  )
}
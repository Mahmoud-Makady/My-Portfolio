/**
 * Node Modules
 */
import { useState } from "react";
import logo from "../assets/logo2.png";

/**
 * Components
 */
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed px-5 top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-slate-900 to-slate-900/0 backdrop-blur-sm">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr-3fr-1fr]">
        <h1>
          <a href="/" className="logo text-zinc-50 block">
            <img src={logo} width={80} height={80} alt="Mahmoud Makady" className="hover:scale-110 hover:rotate-12 transition-transform duration-300" />
          </a>
        </h1>

        <div className="relative md:justify-center">
          <button
            className="menu-btn md:hidden hover:scale-110 transition-transform duration-300"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded">
              {navOpen ? "close" : "menu"}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end hover:scale-105 transition-all duration-300 hover:shadow-lg"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Header;

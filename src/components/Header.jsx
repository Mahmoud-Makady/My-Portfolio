
/**
 * Node Modules
 */
import { useState } from "react";

/**
 * Components
 */
import Navbar from "./Navbar";
import logo from "../assets/logo.png";

const Header = () => {

  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed px-5 top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr-3fr-1fr]">
        <h1>
          <a href="/" className="logo text-zinc-50 ">
            <img
              src={logo}
              width={80}
              height={80}
              alt="Abdulrahman Khalifa"
            />
          </a>
        </h1>

        <div className="relative md:justify-center">
          <button className="menu-btn md:hidden" onClick={() => setNavOpen((prev)=> !prev)}>
            <span className="material-symbols-rounded">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Header;

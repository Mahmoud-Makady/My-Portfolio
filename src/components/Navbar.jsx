import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

const navItems = [
  { label: "Home", link: "#home", sectionId: "home" },
  { label: "About", link: "#about", sectionId: "about" },
  { label: "Projects", link: "#work", sectionId: "work" },
  {
    label: "Contact",
    link: "#contact",
    sectionId: "contact",
    mobileOnly: true,
  },
];

const Navbar = ({ navOpen }) => {
  const activeBox = useRef(null);
  const linkRefs = useRef({});
  const [activeId, setActiveId] = useState("home");

  const moveIndicatorTo = (id) => {
    const link = linkRefs.current[id];
    if (link && activeBox.current) {
      activeBox.current.style.top = link.offsetTop + "px";
      activeBox.current.style.left = link.offsetLeft + "px";
      activeBox.current.style.width = link.offsetWidth + "px";
      activeBox.current.style.height = link.offsetHeight + "px";
    }
  };

  useEffect(() => {
    let raf = null;
    const handleScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const triggerY = window.scrollY + 120;
        let current = navItems[0].sectionId;
        for (const item of navItems) {
          const section = document.getElementById(item.sectionId);
          if (section && section.offsetTop <= triggerY) {
            current = item.sectionId;
          }
        }
        setActiveId(current);
        raf = null;
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    moveIndicatorTo(activeId);
  }, [activeId]);

  useEffect(() => {
    const handleResize = () => moveIndicatorTo(activeId);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeId]);

  useEffect(() => {
    if (navOpen) {
      const t = setTimeout(() => moveIndicatorTo(activeId), 50);
      return () => clearTimeout(t);
    }
  }, [navOpen, activeId]);

  return (
    <nav className={"navbar bg-sky-800 " + (navOpen ? " active" : "")}>
      {navItems.map(({ label, link, sectionId, mobileOnly }) => (
        <a
          href={link}
          key={sectionId}
          ref={(el) => {
            linkRefs.current[sectionId] = el;
          }}
          className={
            "nav-link" +
            (activeId === sectionId ? " active" : "") +
            (mobileOnly ? " md:hidden" : "")
          }
        >
          {label}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;

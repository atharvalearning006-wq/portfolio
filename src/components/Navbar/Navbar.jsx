import "./Navbar.css";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import resume from "../../assets/resume.pdf";

function Navbar() {

  const [showResume, setShowResume] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("hero");

  // Close Resume dropdown when clicking anywhere
  useEffect(() => {

    const closeDropdown = () => {

      setShowResume(false);

    };

    document.addEventListener("click", closeDropdown);

    return () => {

      document.removeEventListener("click", closeDropdown);

    };

  }, []);

  // Active section while scrolling
  useEffect(() => {

    const sections = document.querySelectorAll("section");

    function onScroll() {

      let current = "hero";

      sections.forEach((section) => {

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (
          window.scrollY >= top &&
          window.scrollY < top + height
        ) {

          current = section.getAttribute("id");

        }

      });

      setActive(current);

    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);

  }, []);

  // Dark / Light Mode
  useEffect(() => {

    if (darkMode) {

      document.body.classList.remove("light-mode");

    } else {

      document.body.classList.add("light-mode");

    }

  }, [darkMode]);

  return (

    <nav className="navbar">

      <div className="logo">

        Atharva<span>_.</span>

      </div>

      <div
        className="mobile-toggle"
        onClick={() => setMobileMenu(!mobileMenu)}
      >

        {mobileMenu ? <FiX /> : <FiMenu />}

      </div>

      <ul className={mobileMenu ? "nav-links active" : "nav-links"}>

        <li>

          <a
            href="#about"
            className={active === "about" ? "active-link" : ""}
          >
            About
          </a>

        </li>

        <li className="resume-menu">

          <button
            className="resume-btn"
            onClick={(e) => {

              e.stopPropagation();

              setShowResume(!showResume);

            }}
          >

            Resume ▾

          </button>

          {showResume && (

            <div
              className="resume-dropdown"
              onClick={(e) => e.stopPropagation()}
            >

              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowResume(false)}
              >

                👁 Quick View

              </a>

              <a
                href={resume}
                download
                onClick={() => setShowResume(false)}
              >

                ⬇ Download

              </a>

            </div>

          )}

        </li>

        <li>

          <a
            href="https://github.com/Amhatre-15"
            target="_blank"
            rel="noopener noreferrer"
          >

            GitHub

          </a>

        </li>

        <li>

          <a
            href="#contact"
            className={active === "contact" ? "active-link" : ""}
          >

            Contact

          </a>

        </li>

        {/* <li>

          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >

            {darkMode ? <FiSun /> : <FiMoon />}

          </button>

        </li> */}

      </ul>

    </nav>

  );

}

export default Navbar;
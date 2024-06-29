import React, { useState } from "react";
import { Link } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/navbar.scss";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    if (!menuOpen) {
      const icon = document.querySelector(".icon");
      icon.style.color = "black";
    } else {
      const icon = document.querySelector(".icon");
      icon.style.color = "white";
    }
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="menu-container container-layout">
      <div className="icon" onClick={handleToggleMenu}>
        {menuOpen ? (
          <CloseIcon style={{ cursor: "pointer" }} />
        ) : (
          <MenuIcon style={{ cursor: "pointer" }} />
        )}
      </div>
      {menuOpen && (
        <div className="menu">
          <ul>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={handleToggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                onClick={handleToggleMenu}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={handleToggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={handleToggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;

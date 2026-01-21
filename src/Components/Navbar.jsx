import React from "react";
import { navLinks } from "../Utils/Constants";

const Navbar = () => {
  return (
    <>
      <nav>
        <div>
          <a
            href="#home"
            className="flex items-center gap-2 "
          >
            <img
              src="../../public/images/logo.png"
              alt="logo-png"
            />
            <p>Velvet Pour</p>
          </a>

          <ul>
            {navLinks.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);

  const changeLanguage = () => {
    languageDropdown ? setLanguageDropdown(false) : setLanguageDropdown(true);
  };

  return (
    <>
    <div className="flex text-white my-auto tracking-wide">
      <NavLink
        to="/favorites"
        className="hover:cursor-pointer hover:underline my-auto"
      >
        <FontAwesomeIcon icon={faHeart} className="my-auto mr-1" />
        Favorites
      </NavLink>
      <span className="bg-white mx-4 w-px h-4 my-auto"></span>
      <NavLink
        to="/register"
        className="hover:cursor-pointer hover:underline my-auto"
      >
        Register
      </NavLink>
      <span className="bg-white mx-4 w-px h-4 my-auto"></span>
      <NavLink
        to="/login"
        className="hover:cursor-pointer hover:underline my-auto"
      >
        Login
      </NavLink>
      <span className="bg-white mx-4 w-px h-4 my-auto"></span>
      <span className="relative">
        <span
          className={`hover:cursor-pointer p-2 ${
            languageDropdown
              ? "border border-white"
              : "border border-transparent"
          }`}
          onClick={() => {
            changeLanguage();
          }}
        >
          <FontAwesomeIcon icon={faGlobe} className="my-auto mr-2 }" />
          EN
          <FontAwesomeIcon
            icon={languageDropdown ? faChevronUp : faChevronDown}
            className="my-auto ml-1"
          />
        </span>
        {languageDropdown && (
          <span>
            <span className="hover:cursor-pointer absolute w-full left-0 bg-black border border-white flex p-1 pl-2">
              <img
                className="h-3 my-auto mr-2"
                src="https://www.mybestbrands.de/eaglestatic/icons/italy_flag.png"
                alt="Italian flag"
              ></img>
              IT
            </span>
          </span>
        )}
      </span>
    </div>
    <div className="lg:hidden hover:cursor-pointer">
        <FontAwesomeIcon icon={faBars} size="2xl" />
    </div>
    </>
  );
};

export default NavBar;

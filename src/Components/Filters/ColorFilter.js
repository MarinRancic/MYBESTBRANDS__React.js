import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";

const ColorFilter = (props) => {
  const [colorDropdownActive, setColorDropdownActive] = useState(false);
  const [checkedColors, setCheckedColors] = useState(new Set());
  const dropdownRef = useRef(null);

  const onCheckHandler = (event) => {
    const { value, checked } = event.target;

    const newCheckedColors = new Set(checkedColors);

    if (checked) {
      newCheckedColors.add(value);
    } else {
      newCheckedColors.delete(value);
    }

    setCheckedColors(newCheckedColors);
  };

  const onFilterHandler = () => {
    setColorDropdownActive(false);
    props.onFilterColorsHandler(checkedColors);
  }

  const onClickOutsideDropdownHandler = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !event.target.classList.contains("filter-button")
    ) {
      setColorDropdownActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onClickOutsideDropdownHandler);

    return () => {
      window.removeEventListener("click", onClickOutsideDropdownHandler);
    };
  }, []);
  
  return (
    <div
      ref={dropdownRef}
      className="flex flex-col relative w-2/12 mx-auto my-10"
    >
      <button
        className="border border-black w-full cursor-pointer hover:text-white hover:bg-black m-auto py-1 relative"
        onClick={() => {
          setColorDropdownActive(!colorDropdownActive);
        }}
      >
        COLOR
        <FontAwesomeIcon
          className={`absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 transform ${
            colorDropdownActive ? "-rotate-180" : ""
          }`}
          icon={faChevronDown}
        />
      </button>
      {colorDropdownActive && (
        <div className="absolute border border-black flex flex-col z-10 top-full w-full h-60 overflow-scroll overflow-x-hidden bg-white">
          {props.colors !== null &&
            props.colors.map((color, index) => {
              return (
                <label
                  key={index}
                  className="mt-5 m-px ml-2 hover:text-labelHover hover:cursor-pointer"
                >
                  <input
                    className="mr-2 hover:cursor-pointer"
                    type="checkbox"
                    value={color}
                    onChange={onCheckHandler}
                    checked={checkedColors.has(color) || false}
                  />
                  {color}
                </label>
              );
            })}
          <div className="bottom-0 sticky w-full bg-white mt-4">
            <button
              onClick={onFilterHandler}
              className="border border-black text-white bg-black hover:bg-white hover:text-black m-2 p-1 bottom-2 sticky w-11/12 z-20 filter-button"
            >
              FILTER
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorFilter;

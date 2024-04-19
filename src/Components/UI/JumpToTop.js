import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const JumpToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onScrollHandler = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    if (scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);

    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  });

  return (
    <>
      {isVisible && (
        <div
          className={`border border-black w-10 h-10 flex items-center justify-center fixed bg-white right-5 bottom-44 p-7 hover:cursor-pointer ${
            isVisible
              ? "transition-opacity opacity-100"
              : "transition-opacity opacity-0"
          }`}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <FontAwesomeIcon icon={faArrowUp} className="fa-2x" />
        </div>
      )}
    </>
  );
};

export default JumpToTop;

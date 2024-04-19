import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faHeart,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center bg-black text-white">
      <span className="my-12 text-2xl tracking-wider">
        FIND WHAT YOU STAND FOR.
      </span>
      <div className="flex gap-5 w-9/12 justify-center mb-12">
        <button className="border border-white w-full py-2 hover:bg-white hover:text-black">
          IOS
        </button>
        <button className="border border-white w-full py-2 hover:bg-white hover:text-black">
          ANDROID
        </button>
        <button className="border border-white w-full py-2 hover:bg-white hover:text-black">
          KINDLE
        </button>
      </div>
      <span className="italic mb-4">
        FOLLOW US!
        <FontAwesomeIcon className="ml-2" icon={faHeart} />
      </span>
      <div className="flex gap-2 mb-5">
        <a href="https://www.facebook.com">
          <FontAwesomeIcon icon={faFacebook} className="fa-circle" size="xl" />
        </a>
        <a href="https://www.instagram.com">
          <FontAwesomeIcon icon={faInstagram} className="fa-circle" size="xl" />
        </a>
        <a href="https://www.pinterest.com">
          <FontAwesomeIcon icon={faPinterest} className="fa-circle" size="xl" />
        </a>
      </div>
      <div className="flex flex-col border border-white items-center px-5 py-1 text-sm hover:cursor-pointer hover:bg-white hover:text-black">
        <span className="font-medium tracking-wider">RATE MYBESTBRANDS</span>
        <div>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
      </div>
      <span className="my-14">
        <FontAwesomeIcon icon={faCopyright} />
        COPYRIGHT 2024
      </span>
    </div>
  );
};

export default Footer;

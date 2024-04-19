import logo from "../Logo.PNG";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <img
        src={logo}
        className="my-auto"
        style={{ height: "55px", width: "300px" }}
        alt="Mybestbrands logo"
      ></img>
    </NavLink>
  );
};

export default Logo;

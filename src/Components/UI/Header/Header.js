import Logo from "./Logo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div>
      <div className="lg:bg-black bg-white w-screen h-14 mb-10">
        <div className="flex justify-between items-center w-9/12 mx-auto">
          <Logo />
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Header;

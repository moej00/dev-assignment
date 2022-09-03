import "./Navbar.css";
import ConnectButton from "../connectButton/connectButton";
const NavBar = () => {
  return (
    <nav className="nav">
      <div className="dappLogo">
        <button className="logo">DApp</button>
        <ConnectButton />
      </div>
    </nav>
  );
};

export default NavBar;

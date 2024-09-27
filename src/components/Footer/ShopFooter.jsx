import "./ShopFooter.css";
import { Link } from "react-router-dom";
import Logo from "./Logo/Logo";

const ShopFooter = () => {
  const newYear = new Date().getFullYear();
  return (
    <div className="sub-container">
      <div className="useful-links">
        <h2 className="logo-text"><Logo></Logo></h2>
        <ul className="useful-details">
          <li>+233 xxx xxx xxx</li>
          <li>location xx ,xxx</li>
          <li>Socials</li>
        </ul>
      </div>
      <div className="bottom-section">
        <div className="bottom-section-left">
          <ul>
            <li>
              <Link to={"/"}>Deals</Link>
            </li>
            <li>
              <a href="#products">What's New</a>
            </li>
            <li>
              <a href="#">Delivery</a>
            </li>
          </ul>
        </div>
        <div className="bottom-sectino-right">ULTimate Sound Rentals &copy; {newYear}</div>
      </div>
    </div>
  );
};
export default ShopFooter;

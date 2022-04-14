import "./topbar.css";
import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <FaFacebookSquare className="fa-icon" />
        <FaTwitter className="fa-icon" />
        <FaInstagram className="fa-icon" />
        <FaPinterest className="fa-icon" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <Link to="/add-post">ADD POST</Link>
          </li>
          {!user ? null : <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://resources.premierleague.com/premierleague/photos/players/250x250/p61366.png"
            alt="kdb"
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link to="register">REGISTER</Link>
            </li>
          </ul>
        )}

        <FaSearch className="fa-search" />
      </div>
    </div>
  );
}

import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import "./sidebar.css";

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle">ABOUT BLOG</span>
        <img
          src="https://premierleague-static-files.s3.amazonaws.com/premierleague/photo/2018/05/06/b82680f7-0c8e-4e36-94be-22757f84062a/955249480.jpg"
          alt="pl-title"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
          mollitia quisquam iste pariatur totam.
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">TEAMS </span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Man City</li>
          <li className="sideBarListItem">Man United</li>
          <li className="sideBarListItem">Arsenal</li>
          <li className="sideBarListItem">Liverpool</li>
          <li className="sideBarListItem">Chelsea</li>
          <li className="sideBarListItem">Tottenham</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle">FOLLOW US</span>
        <div className="sideBarSocial">
          <FaFacebookSquare className="sideBarIcon" />
          <FaTwitter className="sideBarIcon" />
          <FaInstagram className="sideBarIcon" />
          <FaPinterest className="sideBarIcon" />
        </div>
      </div>
    </div>
  );
}

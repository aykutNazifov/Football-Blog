import "./settings.css";
import SideBar from "../../components/sidebar/SideBar";
import { FaRegUserCircle } from "react-icons/fa";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsProfilePics">
            <img
              src="https://resources.premierleague.com/premierleague/photos/players/250x250/p61366.png"
              alt="kdb-img"
            />
            <label htmlFor="fileInput">
              <FaRegUserCircle className="settingsPicIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="KDB" />
          <label>Email</label>
          <input type="email" placeholder="kdb@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSumbit">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
}

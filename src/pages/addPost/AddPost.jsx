import "./addpost.css";
import { FaPlus } from "react-icons/fa";

export default function AddPost() {
  return (
    <div className="add">
      <img
        src="https://i0.wp.com/crowdwisdom.live/wp-content/uploads/2021/07/Manchester-City-Transfer-News-and-Rumours.jpg"
        alt="mc-img"
        className="addImg"
      />
      <form className="addForm">
        <div className="addFormGroup">
          <label htmlFor="fileInput">
            <FaPlus className="addIcon" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="addInput"
            autoFocus={true}
          />
        </div>
        <div className="addFormGroup">
          <textarea
            placeholder="Blog Description..."
            type="text"
            className="addInput addText"
          ></textarea>
        </div>
        <button className="addSubmit">Publish</button>
      </form>
    </div>
  );
}

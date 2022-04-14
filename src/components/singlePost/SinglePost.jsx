import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import "./singlepost.css";

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://sportal365images.com/process/smp-images-production/sportal.bg/14042022/c137e9d8-172b-4159-9dbc-9090324d21b5.jpg?operations=crop(0:195:4194:2554),fit(768:433)&format=webp"
          alt=""
        />
        <h1 className="singlePostTitle">
          Man City Atleti Champions League
          <div className="singlePostEdit">
            <FaRegEdit className="singlePostIcon" />
            <FaRegTrashAlt className="singlePostIcon" />
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>KDB</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam
          ad voluptas dignissimos, quidem explicabo recusandae quam similique
          architecto dolor. Aliquid accusantium nemo id fugiat omnis dolorem
          impedit reprehenderit facilis! impedit reprehenderit facilis! impedit
          reprehenderit facilis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim aperiam ad voluptas dignissimos, quidem
          explicabo recusandae quam similique architecto dolor. Aliquid
          accusantium nemo id fugiat omnis dolorem impedit reprehenderit
          facilis! impedit reprehenderit facilis! impedit reprehenderit facilis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam
          ad voluptas dignissimos, quidem explicabo recusandae quam similique
          architecto dolor. Aliquid accusantium nemo id fugiat omnis dolorem
          impedit reprehenderit facilis! impedit reprehenderit facilis! impedit
          reprehenderit facilis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim aperiam ad voluptas dignissimos, quidem
          explicabo recusandae quam similique architecto dolor. Aliquid
          accusantium nemo id fugiat omnis dolorem impedit reprehenderit
          facilis! impedit reprehenderit facilis! impedit reprehenderit facilis!
        </p>
      </div>
    </div>
  );
}

import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://sportal365images.com/process/smp-images-production/sportal.bg/14042022/c137e9d8-172b-4159-9dbc-9090324d21b5.jpg?operations=crop(0:195:4194:2554),fit(768:433)&format=webp"
        alt=""
      />
      <div className="postInfo">
        <div className="postCategs">
          <span className="postCateg">Man City</span>
          <span className="postCateg">Liverpool</span>
        </div>
        <span className="postTitle">Man City Atleti Champions League</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
        accusantium. Sunt ducimus amet ratione distinctio exercitationem facere,
        repellendus eaque autem molestias nostrum tenetur unde, facilis
        explicabo ea vel, odit libero. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Praesentium, accusantium. Sunt ducimus amet ratione
        distinctio exercitationem facere, repellendus eaque autem molestias
        nostrum tenetur unde, facilis explicabo ea vel, odit libero. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Praesentium, accusantium.
        Sunt ducimus amet ratione distinctio exercitationem facere, repellendus
        eaque autem molestias nostrum tenetur unde, facilis explicabo ea vel,
        odit libero.
      </p>
    </div>
  );
}

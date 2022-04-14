import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Premier League</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.mos.cms.futurecdn.net/ph8zoo44JKuSGrbqfXXVWj.jpg"
        alt="pl-img"
      />
    </div>
  );
}

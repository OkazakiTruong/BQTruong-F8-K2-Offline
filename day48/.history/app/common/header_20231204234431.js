import "./header.scss";
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-wrapper">
          <div className="logo">
            <img src="/img/avatar.png" alt="" />
          </div>
          <div>Portfolio</div>
        </div>
        <div className="btn-group"></div>
      </div>
    </header>
  );
}

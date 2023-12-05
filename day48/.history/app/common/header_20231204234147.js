import "./header.scss";
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-wrapper">
          <div className="logo">
            <img src="/img/avatar.png" alt="" />
          </div>
          Portfolio
        </div>
      </div>
    </header>
  );
}

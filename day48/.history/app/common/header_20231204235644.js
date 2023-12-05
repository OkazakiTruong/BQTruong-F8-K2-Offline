import "./header.scss";
export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo-wrapper">
          <div className="logo">
            <img src="/img/avatar.png" alt="" />
          </div>
          <div className="name">Portfolio</div>
        </div>
        <div className="btn-groups">
          <button>facebook</button>
          <button>Sáng Tối</button>
          <button>vi</button>
        </div>
      </div>
    </header>
  );
}

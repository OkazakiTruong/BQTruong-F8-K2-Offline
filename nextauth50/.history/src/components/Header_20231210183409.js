export default function Header() {
  return (
    <header>
      <nav className="flex">
        <div>
          <div>
            <img src="/img/logo_me.png" alt="logo.png" />
          </div>
          <h1>Bùi Quang Trưởng</h1>
          <ul>
            <li>Blog</li>
            <li>Contact</li>
            <li>Profile</li>
          </ul>
        </div>
        <div>
          <button>facebook</button>
          <button>github</button>
          <button>sáng tối</button>
          <button>user</button>
          <button>En</button>
        </div>
      </nav>
    </header>
  );
}

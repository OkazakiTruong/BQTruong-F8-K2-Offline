export default function Header() {
  return (
    <header className="max-w-[1250px] pl-25 pr-25 mx-auto">
      <nav className="flex justify-between items-center">
        <div className="flex">
          <div>
            <img src="/img/logo_me.png" alt="logo.png" />
          </div>
          <h1>Bùi Quang Trưởng</h1>
          <ul className="flex">
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

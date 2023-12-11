export default function Header({ isActive }) {
  return (
    <header className="max-w-[1250px] pt-[20px] pb-[15px] pl-[25px] pr-[25px] mx-auto select-none bg-red-500">
      <nav className="flex justify-between items-center">
        <div className="flex items-center gap-x-[10px]">
          <div className="flex items-center gap-x-[10px]">
            <img src="/img/logo_me.png" alt="logo.png" className="w-[40px]" />
            <h1 className="text-2xl font-bold">Bùi Quang Trưởng</h1>
          </div>
          <ul className="flex items-center gap-x-[10px] font-bold text-xl">
            <li className="active:text-red-500">Home</li>
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

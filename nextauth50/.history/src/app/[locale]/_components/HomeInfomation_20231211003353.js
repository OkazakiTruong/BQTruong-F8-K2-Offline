export default function HomeInfomation() {
  return (
    <div>
      <div className="w-[320px] h-[320px] flex justify-center items-center  rounded-[10px] overflow-hidden">
        <img
          src="/img/avatar.png"
          alt=""
          className="w-[300px] h-[300px] rounded-[10px] hover:scale-125 transition-all shadow-xl"
        />
      </div>
      <p className="text-center">Web Developer</p>
      <div>
        <h3 className="text-2xl font-bold">My skill</h3>
        <div className="pl-[10px]">
          <p>
            <b>Web developer:</b> HTML5, CSS3, SCSS, UI/UX, FIGMA, JS,...
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomeInfomation() {
  return (
    <div>
      <div className="w-[320px] h-[320px] flex justify-center items-center border rounded-[10px] overflow-hidden">
        <img
          src="/img/avatar.png"
          alt=""
          className="w-[300px] h-[300px] rounded-[10px] hover:scale-125 transition-all shadow-xl"
        />
      </div>
      <p>Web Developer</p>
    </div>
  );
}

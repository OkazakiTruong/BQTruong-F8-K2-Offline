export default function ForYou() {
  return (
    <div>
      <h2 className=" text-4xl font-bold text-orange-400 flex gap-x-6 justify-center mt-[60px] mb-6">
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">C</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">H</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">O</span>
        </span>
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">B</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Ạ</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">N</span>
        </span>
      </h2>
      <div className="max-w-[1250px] pl-[25px] pr-[25px] mx-auto">
        <img src="https://picsum.photos/1500/400" alt="" />
        <div>
          <h2>Tokyo</h2>
          <p>Truyền thống và tương lai</p>
          <h2>Ưu Đãi 6.500.000 Cho 1 người / 7 ngày</h2>
        </div>
      </div>
    </div>
  );
}

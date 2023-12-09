import EndowItem from "./EndowItem";
const getData = async () => {
  const response = await fetch("https://api-pages.vercel.app/api/v1/pages");
  const data = await response.json();
  return data;
};

export default async function ListEndow() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h2 className=" text-4xl font-bold text-orange-400 flex gap-x-6 justify-center mt-[60px]">
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Ư</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">U</span>
        </span>
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Đ</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Ã</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">I</span>
        </span>
      </h2>
      <div className="max-w-[1250px] pl-[25px] pr-[25px] mx-auto grid grid-cols-3 gap-3 mt-[40px]">
        {data.map((item, index) => {
          return index < 6 ? <EndowItem key={item.id} /> : "";
        })}
      </div>
    </div>
  );
}

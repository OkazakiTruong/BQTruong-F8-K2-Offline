export default function LibImg() {
  return (
    <div>
      <h2 className=" text-4xl font-bold text-orange-400 flex gap-x-6 justify-center mt-[60px] mb-6">
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">T</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">H</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Ư</span>
        </span>
        <span className="flex gap-x-2">
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">V</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">I</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">Ê</span>
          <span className="bg-orange-100 pt-2 pb-2 pl-2 pr-2 rounded">N</span>
        </span>
      </h2>
      <div className="grid grid-cols-4 gap-6 max-w-[1250px] pl-[25px] pr-[25px] mx-auto">
        <img
          src="https://code-fullstack-exercise49.vercel.app/images/g-1.jpg"
          className="w-full"
          alt=""
        />
        <img
          src="https://code-fullstack-exercise49.vercel.app/images/g-2.jpg"
          className="w-full"
          alt=""
        />
        <img
          src="https://code-fullstack-exercise49.vercel.app/images/g-3.jpg"
          className="w-full"
          alt=""
        />
        <img
          src="https://code-fullstack-exercise49.vercel.app/images/g-4.jpg"
          className="w-full"
          alt=""
        />
        <img
          src="https://code-fullstack-exercise49.vercel.app/images/g-5.jpg"
          className="w-full"
          alt=""
        />
        <img
          src="https://code-fullstack-exercise49.vercel.app/images/g-6.jpg"
          className="w-full"
          alt=""
        />
        <img
          src="https://code-fullstack-exercise49.vercel.app/images/g-7.jpg"
          className="w-full"
          alt=""
        />
        <img
          src="https://code-fullstack-exercise49.vercel.app/images/g-8.jpg"
          className="w-full"
          alt=""
        />
        <img
          src="https://picsum.photos/200/200"
          className="col-span-4 w-full h-[200px]"
          alt=""
        />
      </div>
    </div>
  );
}

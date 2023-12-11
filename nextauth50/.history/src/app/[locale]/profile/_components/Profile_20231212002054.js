export default function Profile({ userInfo }) {
  return (
    <div className="max-w-[1250px] px-[25px] mt-[100px] mx-auto">
      <div className="flex items-center gap-x-[14px]">
        <img src={userInfo.image} alt="" className="w-[40px] rounded-[50%]" />
        <div>
          <p>{userInfo.name}</p>
          <p className="text-sm text-gray-400">{userInfo.email}</p>
        </div>
      </div>
      <div className="my-[20px]">
        <div>
          <button className="p-[10px]">Bùi Quang Trưởng</button>
          <button className="p-[10px]">Not Register</button>
        </div>
      </div>
      <hr />
      <div className="mt-[20px] mb-[14px]">
        <h2 className="text-3xl font-bold mb-[14px]">Viewed articles</h2>
        <p className="text-center text-xl">{`:( You haven't seen any articles yet`}</p>
      </div>
      <hr />
      <div className="mt-[20px] mb-[14px]">
        <h2 className="text-3xl font-bold mb-[14px]">Comment wrote</h2>
        <p className="text-center text-xl">{`:( You haven't commented on a post yet`}</p>
      </div>
    </div>
  );
}

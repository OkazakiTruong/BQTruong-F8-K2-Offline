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
      <div>
        <div>
          <button>Git</button>
        </div>
      </div>
      <hr />
      <div className="mt-[20px]">
        <h2 className="text-3xl font-bold">View articles</h2>
        <p className="text-center">{`:( You haven't seen any articles yet`}</p>
      </div>
      <hr />
      <div className="mt-[20px]">
        <h2 className="text-3xl font-bold">View articles</h2>
        <p className="text-center text-xl">{`:( You haven't seen any articles yet`}</p>
      </div>
    </div>
  );
}

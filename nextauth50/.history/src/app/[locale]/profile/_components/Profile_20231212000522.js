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
    </div>
  );
}

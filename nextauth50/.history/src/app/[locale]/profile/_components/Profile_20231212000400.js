export default function Profile({ userInfo }) {
  return (
    <div className="max-w-[1250px] px-[25px] mt-[100px] mx-auto">
      <div>
        <img src={userInfo.image} alt="" className="w-[40px] rounded-[50%]" />
        <div>
          <p>{userInfo.name}</p>
          <p>{userInfo.email}</p>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { signOut } from "next-auth/react";
import Cookies from "js-cookie";

export default function Profile() {
  const { data: session, status } = useSession();
  useEffect(() => {
    console.log(session);
    console.log(status);
  });
  const handleLogout = () => {
    Cookies.remove("loginWith");
    signOut();
  };
  return (
    <div className="max-w-[1250px] px-[25px] mt-[100px] mx-auto">
      <div className="flex items-center gap-x-[14px]">
        <img
          src={session?.user?.image}
          alt=""
          className="w-[40px] rounded-[50%]"
        />
        <div>
          <p>{session?.user?.name}</p>
          <p className="text-sm text-gray-400">{session?.user?.email}</p>
        </div>
      </div>
      <div className="my-[20px] flex justify-between items-center">
        {Cookies.get("loginWith") === "google" ? (
          <div>
            <button className="p-[10px] bg-orange-400 rounded-l-[10px]">
              Bùi Quang Trưởng
            </button>
            <button className="p-[10px] bg-sky-500 rounded-r-[10px]">
              Not Register
            </button>
          </div>
        ) : (
          <div></div>
        )}

        <div className="border-orange-400 border-2 rounded-[10px] overflow-hidden">
          <button className="p-[10px]  rounded-l-[10px]">Edit Content</button>
          <button className="p-[10px] bg-orange-400 " onClick={handleLogout}>
            Logout
          </button>
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

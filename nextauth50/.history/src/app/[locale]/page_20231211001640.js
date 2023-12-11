import { useTranslations } from "next-intl";
import HomeHeader from "./_components/HomeHeader";
import HomeInfomation from "./_components/HomeInfomation";
export default function Home() {
  return (
    <div className="max-w-[1250px] mx-auto mt-[20px] px-[25px] py-[16px] shadow-xl rounded-[10px]">
      <HomeHeader />
      <div>
        <div>
          <HomeInfomation />
        </div>
      </div>
    </div>
  );
}

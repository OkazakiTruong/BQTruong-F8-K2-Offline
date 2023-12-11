import { useTranslations } from "next-intl";
import HomeHeader from "./_components/HomeHeader";
import HomeInfomation from "./_components/HomeInfomation";
export default function Home() {
  return (
    <div className="p-[10px]">
      <HomeHeader />
      <div>
        <div>
          <HomeInfomation />
        </div>
      </div>
    </div>
  );
}

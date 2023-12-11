import { useTranslations } from "next-intl";
import HomeHeader from "./_components/HomeHeader";
import HomeInfomation from "./_components/HomeInfomation";
export default function Home() {
  return (
    <>
      <HomeHeader />
      <div>
        <div>
          <HomeInfomation />
        </div>
      </div>
    </>
  );
}

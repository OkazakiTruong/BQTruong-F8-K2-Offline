import { useTranslations } from "next-intl";
import HomeHeader from "./_components/HomeHeader";
export default function Home() {
  const t = useTranslations("Home");
  return (
    <>
      <HomeHeader />
    </>
  );
}

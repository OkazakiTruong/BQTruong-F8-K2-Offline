import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import HomeHeader from "./_components/HomeHeader";
export default function Home() {
  const t = useTranslations("Home");
  return (
    <>
      <HomeHeader />
    </>
  );
}

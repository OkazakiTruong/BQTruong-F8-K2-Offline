import { useTranslations } from "next-intl";
import HomeHeader from "./_components/HomeHeader";
export default function Home({ params: { locale } }) {
  const t = useTranslations("Home");
  return (
    <>
      <HomeHeader />
    </>
  );
}

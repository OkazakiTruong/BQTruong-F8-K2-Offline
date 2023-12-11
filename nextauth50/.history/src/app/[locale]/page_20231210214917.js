import { useTranslations } from "next-intl";
import HomeHeader from "./_components/HomeHeader";
export default function Home({ params: { locale } }) {
  return (
    <>
      <HomeHeader locale={locale} />
    </>
  );
}

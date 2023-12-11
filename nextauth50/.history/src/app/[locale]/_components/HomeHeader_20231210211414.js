import { useTranslations } from "next-intl";
export default function HomeHeader() {
  const t = useTranslations("HomeHeader");
  return (
    <div className="max-w-[1250px] mx-auto mt-[20px] text-center">
      <h2 className="font-bold text-2xl">BÙI QUANG TRƯỞNG</h2>
      <p className="text-xl">{t("title")}</p>
    </div>
  );
}

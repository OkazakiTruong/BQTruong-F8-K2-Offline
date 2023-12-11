import { getTranslations, getLocale } from "next-intl/server";
export default async function Contact() {
  const t = await getTranslations("Profile");
  return (
    <div className="max-w-[1250px] px-[25px] mx-auto mt-[160px]">
      <h1 className="text-center text-2xl">{t("title")}</h1>
    </div>
  );
}

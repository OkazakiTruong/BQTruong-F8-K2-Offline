import Footer from "@/components/Footer";
import AuthLoginForm from "./_components/AuthLoginForm";

import { useTranslations } from "next-intl";

export default function auth() {
  const t = useTranslations("Auth");
  const translation = {
    heading: t("authHeading"),
    authGoogle: t("authGoogle"),
    authGithub: t("authGithub"),
    title: t("title"),
  };
  return (
    <div className="mt-[120px]">
      <Footer />
      <AuthLoginForm translation={translation} />
    </div>
  );
}

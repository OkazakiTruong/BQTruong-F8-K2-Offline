import Footer from "@/components/Footer";
import AuthLoginForm from "./_components/AuthLoginForm";
import { useTranslations } from "next-intl";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default function auth() {
  const session = getServerSession(options);
  if (!session) {
    redirect("/profile");
  }
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

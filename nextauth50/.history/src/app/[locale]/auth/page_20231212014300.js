import Footer from "@/components/Footer";
import AuthLoginForm from "./_components/AuthLoginForm";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "@/navigation";
import { getProviders } from "next-auth/react";

import { useTranslations } from "next-intl";

export default async function auth() {
  const session = await getServerSession(options);
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

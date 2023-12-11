import { useTranslations } from "next-intl";
import AuthLoginForm from "./_components/AuthLoginForm";

export default function auth() {
  const t = useTranslations("HomeInformation");

  return <AuthLoginForm />;
}

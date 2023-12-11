import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "@/navigation";
import Profile from "./_components/Profile";
import Footer from "@/components/Footer";
export default async function page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/auth");
  }
  console.log(session);
  return (
    <div>
      <Profile userInfo={session?.user} />
      <Footer />
    </div>
  );
}

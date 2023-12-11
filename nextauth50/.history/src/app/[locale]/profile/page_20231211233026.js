import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "@/navigation";
import Profile from "./_components/Profile";
export default async function page() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/auth");
  }
  return (
    <div>
      <Profile />
    </div>
  );
}

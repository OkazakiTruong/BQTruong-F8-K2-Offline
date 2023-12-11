import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
export default async function page() {
  const session = await getServerSession(options);

  return <div>Profile</div>;
}

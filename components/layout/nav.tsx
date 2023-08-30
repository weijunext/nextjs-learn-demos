import { getCurrentUser } from "@/lib/session";
import { UserInfo } from "@/types/user";
import Navbar from "./navbar";

export default async function Nav() {
  const user = await getCurrentUser();
  return <Navbar user={user as UserInfo} />;
}

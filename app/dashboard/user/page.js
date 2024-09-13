import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

const UserDashboard = async () => {
  const session = await getServerSession(options);

  if (!session?.user) {
    redirect("/login");
  }
  return (
    <div>
      <h1>This is the User Dashboard</h1>
      <h3>Welcome, {session.user?.firstName}</h3>
    </div>
  );
};

export default UserDashboard;

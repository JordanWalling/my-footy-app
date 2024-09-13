import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
async function AdminDashboard() {
  const session = await getServerSession(options);

  if (!session || session?.user.role !== "admin") {
    redirect("/dashboard");
  }
  return (
    <div>
      <h1>Welcome, {session?.user?.firstName}</h1>
    </div>
  );
}

export default AdminDashboard;

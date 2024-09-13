import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";
async function Dashboard() {
  const session = await getServerSession(options);
  console.log(session);

  if (session?.user?.role === "admin") {
    redirect("/dashboard/admin");
  } else {
    redirect("/dashboard/user");
  }
  return (
    <div>
      {session?.user ? (
        <>
          <h1>Welcome, {session?.user?.firstName}</h1>
          <p>You are logged in as a {session?.user?.role}</p>
        </>
      ) : (
        <>
          <h1>You are not welcome here</h1>
        </>
      )}
    </div>
  );
}

export default Dashboard;

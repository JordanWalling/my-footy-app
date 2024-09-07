"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
function UserDashboard() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.push("/login");
      return;
    }
    if (session?.user.role === "admin") {
      router.push("/dashboard/admin");
    }
    router.push("/dashboard/user");
  }, [router, session]);
  return (
    <div>
      {session?.user.role === "user" && (
        <div>
          <h1>Welcome, {session?.user.firstName}</h1>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;

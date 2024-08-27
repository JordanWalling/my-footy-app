"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
    if (session?.user.role !== "admin") {
      router.push("/dashboard/user");
    }
  }, [router, status]);

  if (status === "loading") return <p>Loading...</p>;

  return (
    <>
      {session?.user.role === "admin" && (
        <div>
          <h1>Welcome, {session?.user.firstName}</h1>
        </div>
      )}
    </>
  );
}

export default AdminDashboard;

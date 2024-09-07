import { Inter } from "next/font/google";
import AdminNavbar from "@/components/admin-navbar/AdminNavbar";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-sky-50">
        <AdminNavbar />
        {children}
      </div>
    </>
  );
}

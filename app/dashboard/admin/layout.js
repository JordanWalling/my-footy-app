import { Inter } from "next/font/google";
import AdminNavbar from "@/components/admin-navbar/AdminNavbar";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AdminNavbar />
        {children}
      </body>
    </html>
  );
}

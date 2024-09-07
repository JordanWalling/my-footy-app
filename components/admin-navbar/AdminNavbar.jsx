"use client";
import Link from "next/link";
import { VscJersey } from "react-icons/vsc";
import { AiOutlineUserAdd } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

import { IoAmericanFootballOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function AdminNavbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const adminLinks = [
    {
      id: 1,
      name: "Create Team",
      href: "/dashboard/admin/create-team",
    },
    {
      id: 2,
      name: "Create Game",
      href: "/dashboard/admin/create-game",
    },
    {
      id: 3,
      name: "Create Player",
      href: "/dashboard/admin/create-player",
    },
  ];

  useEffect(() => {
    router.push("/dashboard/admin/create-team");
  }, [router]);

  function handleLinkClick() {
    setIsOpen(false);
  }
  return (
    <nav className="mb-2 w-full mb-2 relative">
      <div className="ml-3">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-full flex shadow-slate-400 shadow-md cursor-pointer"
        >
          <div className="flex bg-white w-full border-b-2 border-slate-100 justify-center items-center">
            <div className="py-2 font-bold text-lg">
              {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
            </div>
          </div>
        </div>

        <ul
          className={`absolute left-0 bg-white shadow-lg ml-3 mt-2 w-48 rounded ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {adminLinks.map((link) => (
            <li
              key={link.id}
              className="hover:bg-sky-100"
              onClick={handleLinkClick}
            >
              <Link
                href={link.href}
                className="block px-4 py-1 text-sm font-sm text-gray-700 hover:text-gray-900"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default AdminNavbar;

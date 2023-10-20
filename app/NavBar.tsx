"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <div className="flex bg-slate-300 p-5 space-x-5">
      <Link href="/" className="mr-5">
        Next.js
      </Link>
      <Link href="/users">Users</Link>
      {status === "loading" && (
        <span className="loading loading-dots loading-md"></span>
      )}
      {status === "authenticated" && (
        <div>
          {session.user?.name}
          <Link className="ml-5" href="/api/auth/signout">Signout</Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <Link href="/api/auth/signin">Login</Link>
      )}
    </div>
  );
};

export default NavBar;

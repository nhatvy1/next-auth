import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/option";
import Link from "next/link";

const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="text-gray-100 bg-gray-600">
      <nav className="flex items-center justify-between w-full px-10 py-4">
        <div>NextAuth</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/create-user">Create User</Link>
          <Link href="/client-member">Client member</Link>
          <Link href="/member">Member</Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Nav;

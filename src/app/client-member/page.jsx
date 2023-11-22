"use client";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const ClientMember = () => {
  const { data: session } = useSession({
    require: true,
    onUnanthenticated() {
      redirect("/api/auth/signin?callbackUrl=/client-member");
    },
  });
  return (
    <>
      <h1>Member Client Session</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </>
  );
};

export default ClientMember;

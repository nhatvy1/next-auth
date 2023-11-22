import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/option";
import { redirect } from "next/navigation";

const Member = async () => {
  const session = await getServerSession(options);
  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/member");
  }
  return (
    <>
      <h1>Member</h1>
      <p>{session?.user?.email}</p>
      <p>{session?.user?.role}</p>
    </>
  );
};

export default Member;

"use server"

import { auth } from "@/src/auth";
import SigninBtn from "@/src/app/components/sign-in-btn";
import Image from "next/image";
import SignoutBtn from "@/src/app/components/sign-out-button";


export default async function Home() {
  const session = await auth();
  console.log("session- ", session);

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {!session ?
        <>
          <h2>You are not signed in-</h2>
          <SigninBtn />
        </>
        :
        <>
          <h2> Next Auth v5 + Next 16</h2>
          <p>User signed in with name: {session?.user?.name}</p>
          <p>User signed in with email: {session?.user?.email}</p>
          {session?.user?.image &&
            <Image src={session?.user?.image} width={48} height={48} alt={session?.user.name || "Avatar"} />}
          <SignoutBtn />
        </>
      }
    </div>
  );
}

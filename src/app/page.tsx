"use client"

import { login } from "@/src/lib/actions/auth";


export default function Home() {
  
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h2>You are not signed in-</h2>
      <button onClick={()=>login()}>Sign in with Github</button>
    </div>
  );
}

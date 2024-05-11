"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Background } from "@/components/sections/background";
import Image from "next/image";

export default function SignIn() {
  const { status, data: session } = useSession();
  return (
    <Background>
      <div className="flex items-center justify-between p-4 shadow-md">
        {status === "authenticated" ? (
          <div>
            <button
              onClick={() => signOut()}
              className="rounded-md bg-slate-900 px-6 py-2 text-white"
            >
              Sign Out
            </button>
            <div className="flex flex-col gap-3 rounded-md bg-yellow-200 p-8 shadow-xl">
              <Image
                className="rounded-full"
                alt="User Image"
                src={session?.user?.image ?? ""}
                width={60}
                height={60}
              />
              <div>
                Name: <span className="font-bold">{session?.user?.name}</span>
              </div>
              <div>
                Email: <span className="font-bold">{session?.user?.email}</span>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => signIn("google")}
            className="rounded-md bg-slate-900 px-6 py-2 text-white"
          >
            Sign In
          </button>
        )}
      </div>
    </Background>
  );
}

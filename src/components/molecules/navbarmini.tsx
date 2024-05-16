"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../atoms/button";
import { useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBarMini() {
  const { status } = useSession();
  return (
    <header className="w-full rounded-2xl bg-white">
      <nav
        className="mx-auto flex items-center justify-between lg:px-4"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">UXSource</span>
            <Image
              className="h-8 w-auto"
              width={32}
              height={32}
              src="/logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="tertiary" href="/login">
            {status === "authenticated" ? "Profile" : "Log In"}
          </Button>
        </div>
      </nav>
    </header>
  );
}

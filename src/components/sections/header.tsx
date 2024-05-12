"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import { useSession } from "next-auth/react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
];

type HeaderProps = {
  selected: string;
};

const Header: React.FC<HeaderProps> = ({ selected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useSession();

  return (
    <div className="sticky top-2 z-50 flex w-full items-center justify-between rounded-xl bg-white px-4 py-2 shadow-xl shadow-slate-300/5">
      <div className="flex">
        <Link href="/" className="flex w-full items-center gap-4">
          <Image
            width={40}
            height={40}
            src="/logo.svg"
            alt="Logo"
            className="rounded-md object-cover"
          />
          <h1 className="text-xl font-semibold text-slate-500">UXSource</h1>
        </Link>
      </div>
      <div className="hidden items-center gap-4 lg:flex">
        <div className="hidden lg:flex lg:gap-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              legacyBehavior
              passHref
              href={item.href}
              className="text-sm font-semibold text-gray-900"
            >
              <motion.div
                className="cursor-pointer p-4 hover:underline"
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <div className="hidden gap-4 lg:flex">
        <Link href="/login">
          <Button>{status === "authenticated" ? "Profile" : "Log In"}</Button>
        </Link>
      </div>
      <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-0 top-0 z-50 flex h-full w-full flex-col items-center gap-4 bg-white p-4">
          <button className="self-end" onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {navigation.map((item) => (
            <motion.div
              key={item.name}
              className="p-4 hover:underline"
              whileHover={{ scale: 1.1 }}
            >
              <Link
                legacyBehavior
                passHref
                href={item.href}
                className="text-sm font-semibold text-gray-900"
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <Link href="/login">
            <Button>Log In</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export { Header };

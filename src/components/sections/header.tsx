"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "../ui/button";
import Image from "next/image";
import { useState } from "react";

type HeaderProps = {
  selected: string;
};

const Header: React.FC<HeaderProps> = ({ selected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex">
        <Link href="/" className="w-full flex items-center gap-4">
          <Image
            width={40}
            height={40}
            src="/logo.svg"
            alt="Logo"
            className="rounded-md object-cover"
          />
          <h1 className="text-2xl font-semibold text-blue-800">Coursero</h1>
        </Link>
      </div>
      <div className="items-center gap-4 lg:flex hidden">
        <Link href="/" legacyBehavior passHref>
          <Button
            className={
              selected === "1" ? "bg-blue-500" : "bg-transparent text-blue-500"
            }
          >
            Home
          </Button>
        </Link>
        <Link href="/courses" legacyBehavior passHref>
          <Button
            className={
              selected === "2" ? "bg-blue-500" : "bg-transparent text-blue-500"
            }
          >
            Courses
          </Button>
        </Link>
      </div>
      <div className="gap-4 lg:flex hidden">
        <Button>Log In</Button>
        <Button variant="secondary">Sign Up</Button>
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
        <div className="absolute top-0 left-0 w-full h-full bg-white flex flex-col items-center gap-4 p-4 z-50">
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
          <Link href="/" legacyBehavior passHref>
            <Button
              className={
                selected === "1"
                  ? "bg-blue-500"
                  : "bg-transparent text-blue-500"
              }
            >
              Home
            </Button>
          </Link>
          <Link href="/courses" legacyBehavior passHref>
            <Button
              className={
                selected === "2"
                  ? "bg-blue-500"
                  : "bg-transparent text-blue-500"
              }
            >
              Courses
            </Button>
          </Link>
          <Button>Log In</Button>
          <Button variant="secondary">Sign Up</Button>
        </div>
      )}
    </div>
  );
};

export { Header };

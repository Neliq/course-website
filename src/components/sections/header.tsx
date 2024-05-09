"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "../ui/button";
import Image from "next/image";

type HeaderProps = {
  selected: string;
};

const Header: React.FC<HeaderProps> = ({ selected }) => {
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
      <div className="flex items-center gap-4 lg:flex hidden">
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
    </div>
  );
};

export { Header };

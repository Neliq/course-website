"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../atoms/button";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

type NavBarProps = {
  stick?: boolean;
};

const NavBar: React.FC<NavBarProps> = ({ stick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { status } = useSession();
  return (
    <header
      className={`w-full rounded-2xl bg-white ${stick ? "" : "fixed left-0 right-0 top-0 z-50 mx-auto max-w-[1152px] bg-white/75 backdrop-blur-md"}`}
    >
      <nav
        className="mx-auto flex items-center justify-between p-6 lg:px-8"
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
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-lg font-semibold leading-6 text-gray-900 hover:text-indigo-600"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-lg font-semibold leading-6 text-gray-900 hover:text-indigo-600"
          >
            Courses
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="tertiary" href="/login">
            {status === "authenticated" ? "Profile" : "Log In"}
          </Button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
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
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  href="/courses"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Courses
                </Link>
              </div>
              <div className="py-6">
                <Button variant="tertiary" href="/login">
                  {status === "authenticated" ? "Profile" : "Log In"}
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export { NavBar };

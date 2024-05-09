"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Guide = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-8">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-semibold text-slate-500 mb-16">
          What will you find in our courses?
        </h1>
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="w-full flex flex-col p-4 pt-8 bg-white border-slate-300 border-[1px] rounded gap-4 text-center">
            <h1 className="text-2xl font-semibold">1. Video tutorials</h1>
            <div
              style={{
                position: "relative",
              }}
              className="h-[256px] lg:h-[256px] w-full"
            >
              <Image
                layout="fill"
                objectFit="cover"
                loading="lazy"
                src="/ui-course-thumbnail.jpg"
                alt="Image"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                className="rounded-md absolute top-0 left-0"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="w-full flex flex-col p-4 pt-8 bg-white border-slate-300 border-[1px] rounded gap-4 text-center">
            <h1 className="text-2xl font-semibold">2. Figma Files</h1>
            <div
              style={{
                position: "relative",
              }}
              className="h-[256px] lg:h-[256px] w-full"
            >
              <Image
                layout="fill"
                objectFit="cover"
                loading="lazy"
                src="/ui-course-thumbnail.jpg"
                alt="Image"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                className="rounded-md absolute top-0 left-0"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="w-full flex flex-col p-4 pt-8 bg-white border-slate-300 border-[1px] rounded gap-4 text-center">
            <h1 className="text-2xl font-semibold">3. Mentor Feedback</h1>
            <div
              style={{
                position: "relative",
              }}
              className="h-[256px] lg:h-[256px] w-full"
            >
              <Image
                layout="fill"
                objectFit="cover"
                loading="lazy"
                src="/ui-course-thumbnail.jpg"
                alt="Image"
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                }}
                className="rounded-md absolute top-0 left-0"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Guide };

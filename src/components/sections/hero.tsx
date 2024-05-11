import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-16 text-center lg:flex-row">
      <div className="flex flex-col items-center ">
        <h1 className="mb-4 text-6xl leading-snug">
          Upgrade your <br /> knowledge today!
        </h1>
        <div className="mb-4 flex rounded bg-sky-200 px-4 py-2 text-lg font-semibold text-black">
          100% Free
        </div>
        <p className="mb-8 max-w-2xl text-base leading-normal">
          Welcome to the gateway of knowledge and transformation! Here, embark
          on an extraordinary journey where learning meets empowerment. Our
          course website isn&apos;t just a platform; it&apos;s a sanctuary for
          those hungry for growth, driven by curiosity, and passionate about
          mastering new skills.
        </p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export { Hero };

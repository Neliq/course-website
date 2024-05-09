import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-16">
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
        <h1 className="text-5xl mb-4 leading-snug">
          Upgrade your <br /> knowledge today!
        </h1>
        <div className="p-2 rounded text-black text-xl font-semibold flex mb-4 bg-emerald-200">
          100% Free
        </div>
        <p className="mb-8 max-w-2xl text-base leading-normal">
          Welcome to the gateway of knowledge and transformation! Here, embark
          on an extraordinary journey where learning meets empowerment. Our
          course website isn&apos;t just a platform; it&apos;s a sanctuary for
          those hungry for growth, driven by curiosity, and passionate about
          mastering new skills. Whether you&apos;re a novice eager to explore
          uncharted territories or a seasoned professional seeking to refine
          your expertise, our comprehensive range of courses caters to all.
        </p>
        <Button>Get Started</Button>
      </div>
      <div
        style={{
          position: "relative",
        }}
        className="h-[256px] lg:h-[512px] w-full"
      >
        <Image
          layout="fill"
          objectFit="cover"
          loading="lazy"
          src="/ui-course-thumbnail2.jpg"
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
    </div>
  );
};

export { Hero };

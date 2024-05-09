"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:justify-between items-center gap-8">
      <div className="flex flex-col items-center text-center lg:text-left lg:items-start">
        <h1 className="text-5xl mb-4 leading-snug">
          Upgrade your <br /> knowledge today!
        </h1>
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
      <div className="h-[100%]">
        <Image
          width={420}
          height={2000}
          loading="lazy"
          src="https://img.freepik.com/free-vector/gray-3d-icosahedron-black-background-vector_53876-168031.jpg?w=826&t=st=1715189629~exp=1715190229~hmac=0c713bfa3f13da7b489e73eae6b215cedff386c32a2282ec3af0aeaa3a566827"
          alt="Image"
          className="rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export { Hero };

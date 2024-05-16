"use client";

import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../atoms/button";

type CardProps = {
  href: string;
  src: string;
  title: string;
  description: string;
};

const CourseCard: React.FC<CardProps> = ({ href, src, title, description }) => (
  <div className="flex w-full flex-col items-center justify-between overflow-hidden rounded-lg bg-white lg:flex-row lg:items-start">
    <div
      style={{
        position: "relative",
      }}
      className="h-[256px] w-full border-b-2 lg:h-[400px] lg:w-1/2 lg:border-b-0 lg:border-r-2"
    >
      <Image
        layout="fill"
        objectFit="cover"
        loading="lazy"
        src={src}
        alt="Image"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
        className="absolute left-0 top-0"
      />
    </div>
    <div className="flex w-full flex-col items-center gap-4 p-8 text-center lg:w-1/2 lg:items-start lg:justify-start lg:text-left">
      <div className="text-2xl font-semibold">{title}</div>
      <div>{description}</div>
      <Button href={href} variant="secondary">
        See details
      </Button>
    </div>
  </div>
);

export { CourseCard };

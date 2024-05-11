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
import { Button } from "../ui/button";

type GuideCardProps = {
  img: string;
  title: string;
  description: string;
};

const GuideCard: React.FC<GuideCardProps> = ({ img, title, description }) => (
  <div className="flex w-full flex-col gap-4 rounded-[0.75rem] bg-white text-center shadow-lg shadow-slate-500/10">
    <div
      style={{
        position: "relative",
      }}
      className="h-[256px] w-full lg:h-[256px]"
    >
      <Image
        layout="fill"
        objectFit="cover"
        loading="lazy"
        src={img}
        alt="Image"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
        className="absolute left-0 top-0 rounded-md"
      />
    </div>
    <h1 className="text-2xl font-semibold">{title}</h1>
    <p className="px-4 pb-4">{description}</p>
  </div>
);

export { GuideCard };

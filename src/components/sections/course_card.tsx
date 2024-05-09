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

type CardProps = {
  href: string;
  src: string;
  title: string;
  description: string;
};

const CourseCard: React.FC<CardProps> = ({ href, src, title, description }) => (
  <Card className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start">
    <div
      style={{
        position: "relative",
      }}
      className="h-[256px] lg:h-[400px] lg:w-1/2 w-full"
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
        className="rounded-md absolute top-0 left-0"
      />
    </div>
    <div className="lg:w-1/2 w-full flex flex-col items-center text-center lg:text-left lg:items-start lg:justify-start">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={href}>
          <Button>See details</Button>
        </Link>
      </CardFooter>
    </div>
  </Card>
);

export { CourseCard };

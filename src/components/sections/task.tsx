"use client";

import * as React from "react";
import Link from "next/link";
import { FaFigma, FaRegEdit } from "react-icons/fa";

import { Button } from "../ui/button";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TaskProps {
  title: string;
  description: string;
  href: string;
}

const Task: React.FC<TaskProps> = ({ title, description, href }) => {
  return (
    <div className="bg-white w-full flex justify-center p-8 rounded-xl">
      <div className="flex w-full flex-col justify-center items-start gap-8">
        <h1 className="text-xl">{title}</h1>
        <p className="max-w-[640px]">{description}</p>
        <div className="flex gap-4">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Button className="gap-[8px] bg-blue-600">
              <FaFigma />
              Open Figma File
            </Button>
          </Link>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="gap-[8px] bg-green-600">
                <FaRegEdit />
                Send for review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Send for review</DialogTitle>
                <DialogDescription>
                  Paste link to your finished figma file. <br />
                  IMPORTANT: Make sure to check in Figma shere settings Anyone
                  with the link can view
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="link" className="text-right">
                    Link to file
                  </Label>
                  <Input
                    id="link"
                    placeholder="Paste link here"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Send for review</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export { Task };

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

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { Session } from "next-auth";

interface TaskProps {
  title: string;
  description: string;
  href: string;
  id: string;
}

const Task: React.FC<TaskProps> = ({ title, description, href, id }) => {
  const { data: session } = useSession();
  const [isSent, setIsSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const link = form.elements.namedItem("link") as HTMLInputElement;

    if (session) {
      const response = await fetch("/api/task", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session?.user?.email, // Add null check for session.user
          task: id,
          link: link.value,
          state: "send",
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setIsOpen(false); // Handle successful response
      } else {
        // Handle error
      }
    }
  };
  // ...
  useEffect(() => {
    const fetchRecord = async () => {
      const response = await fetch(
        `/api/task?email=${encodeURIComponent(session?.user?.email ?? "")}&task=${encodeURIComponent(id)}`,
      );

      // If the response is OK and the response body is not empty, parse the JSON
      if (response.ok && response.body) {
        const data = await response.json();

        // If the record exists, set isSent to true
        if (data) {
          setIsSent(true);
        }
      }
    };

    fetchRecord();
  }, [session?.user?.email, id]);

  if (href === "") return null;
  return (
    <div className="flex w-full items-center justify-center rounded-xl border-[1px] border-slate-200 bg-white p-8">
      <div className="flex w-full flex-col items-center justify-center gap-8 text-center lg:items-start lg:text-left">
        <h1 className="text-xl">{title}</h1>
        <p className="max-w-[640px]">{description}</p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Link href={href} target="_blank" rel="noopener noreferrer">
            <Button className="gap-[8px] bg-blue-600">
              <FaFigma />
              Open Figma File
            </Button>
          </Link>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="gap-[8px] bg-green-600" disabled={isSent}>
                <FaRegEdit />
                {isSent ? "Already sent" : "Send for review"}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[328px] lg:max-w-[512px]">
              {isSent ? (
                <div>Send successfully</div>
              ) : (
                <>
                  <DialogHeader>
                    <DialogTitle>Send for review</DialogTitle>
                    <DialogDescription>
                      Paste link to your finished figma file. <br />
                      IMPORTANT: Make sure to check in Figma shere settings
                      Anyone with the link can view
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="link" className="text-right">
                          Link to file
                        </Label>
                        <Input
                          id={id}
                          name="link"
                          placeholder="Paste link here"
                          className="col-span-3"
                        />
                      </div>
                      <Button type="submit">Send for review</Button>
                    </form>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export { Task };

"use client";

import * as React from "react";
import Link from "next/link";
import { FaFigma, FaRegEdit, FaRegCheckCircle } from "react-icons/fa";

import { Button } from "../atoms/button";
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

  const handleCheck = async () => {
    if (session) {
      if (!isSent) {
        const response = await fetch("/api/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session?.user?.email, // Add null check for session.user
            task: id,
            link: "done",
            state: "done",
          }),
        });

        if (response.ok) {
          setIsSent(true);
        } else {
          // Handle error
        }
      } else {
        const response = await fetch("/api/task", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: session?.user?.email, // Add null check for session.user
            task: id,
          }),
        });

        if (response.ok) {
          setIsSent(false);
        } else {
          // Handle error
        }
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

  if (href === "")
    return (
      <div className="flex w-full items-center justify-center rounded-xl border-[1px] border-slate-200 bg-white p-8">
        <div className="flex w-full flex-col items-center justify-center gap-8 text-center lg:items-start lg:text-left">
          <div className="flex flex-col gap-4 lg:flex-row">
            <Button
              variant={isSent ? "success" : "secondary"}
              onClick={handleCheck}
            >
              {isSent ? <FaRegCheckCircle /> : <FaRegEdit />}
              {isSent ? "Already done (undo)" : "Mark as done"}
            </Button>
          </div>
        </div>
      </div>
    );
  return (
    <div className="flex w-full items-center justify-center rounded-xl border-[1px] border-slate-200 bg-white p-8">
      <div className="flex w-full flex-col items-center justify-center gap-8 text-center lg:items-start lg:text-left">
        <h1 className="text-xl">{title}</h1>
        <p className="max-w-[640px]">{description}</p>
        <div className="flex flex-col gap-4 lg:flex-row">
          <Button href={href} newTab={true} variant="primary">
            <FaFigma />
            Open Figma File
          </Button>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger>
              <Button variant={isSent ? "success" : "secondary"}>
                {isSent ? <FaRegCheckCircle /> : <FaRegEdit />}
                {isSent ? "Already sent (edit)" : "Send for review"}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[328px] lg:max-w-[512px]">
              {isSent ? (
                <div>
                  <DialogHeader>
                    <DialogTitle>Sent Successfully</DialogTitle>
                    <DialogDescription>
                      Your task has been sent for review. <br />
                      You can still edit the link if needed.
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
                      <div className="flex justify-end">
                        <Button type="submit" variant="primary">
                          Resend
                        </Button>
                      </div>
                    </form>
                  </div>
                </div>
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
                      <div className="flex justify-end">
                        <Button type="submit" variant="primary">
                          Send for review
                        </Button>
                      </div>
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

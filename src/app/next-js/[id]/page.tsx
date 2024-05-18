"use client";
import YoutubeVideo from "@/components/sections/video";
import { Task } from "@/components/sections/task";
import { data } from "../data";
import { Button } from "@/components/atoms/button";
import { BackNextButtons } from "@/components/sections/back_next_buttons";
import { ScrollArea } from "@/components/ui/scroll-area";
import TextPage from "./text-page";
import NavBarMini from "@/components/molecules/navbarmini";
import { ContentList } from "@/components/sections/content-list";
import ProgressBar from "@/components/sections/course_progress_bar";
import { NavBar } from "@/components/molecules/navbar";
import Link from "next/link";

import { FaRegCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";

import { motion } from "framer-motion";

import { FaAngleDoubleUp } from "react-icons/fa";

import { useRef } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const DataSet = data.find((item) => item.id === params.id);
  let currentId = params.id;

  const viewportRef = useRef<HTMLDivElement>(null);

  const onClickHandler = () => {
    if (viewportRef !== null && viewportRef.current !== null) {
      viewportRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const { data: session } = useSession();
  const [isSent, setIsSent] = useState(false);
  const [isSent2, setIsSent2] = useState<boolean[]>([]);

  const checkItemInDatabase = async (itemId: string) => {
    const response = await fetch(
      `/api/task?email=${encodeURIComponent(session?.user?.email ?? "")}&task=${encodeURIComponent(itemId)}`,
    );

    if (response.ok && response.body) {
      const data = await response.json();
      return data ? true : false;
    }

    return false;
  };

  useEffect(() => {
    const fetchRecords = async () => {
      const results = await Promise.all(
        data.map((item: any) => checkItemInDatabase(item.id)),
      );
      setIsSent2(results);
    };

    fetchRecords();
  }, [session?.user?.email, data]);

  if (!DataSet) {
    return <div>No data found for this id</div>;
  }
  return (
    <div className="flex h-svh gap-8 lg:p-4">
      <div className="hidden min-w-72 flex-col items-center gap-8 rounded-xl bg-white py-8 lg:flex">
        <NavBarMini />
        <div className="w-full p-4">
          <ProgressBar />
        </div>
        <ScrollArea className="w-full overflow-auto px-4">
          <motion.div
            className="flex w-full flex-col items-center gap-4"
            initial={{ y: "-100vh" }}
            animate={{ y: "0vh" }}
            transition={{ duration: 1 }}
          >
            {data.map((item: any, index: number) => (
              <Link
                key={item.id}
                href={`/next-js/${item.id}`}
                className="w-full max-w-[640px]"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`flex w-full items-center justify-between rounded-full border-[1px] py-2 pl-4 pr-2 text-slate-800 hover:bg-indigo-50 hover:text-slate-800 ${currentId === item.id ? "border-[1px] border-indigo-500 text-indigo-600" : "border-[1px] border-slate-300"} ${isSent2[index] ? "bg-indigo-500 text-white" : ""}`}
                >
                  {item.name}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2 }}
                  >
                    {isSent2[index] ? (
                      <FaRegCheckCircle className="text-white" />
                    ) : (
                      ""
                    )}
                  </motion.div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </ScrollArea>
      </div>
      <div className="flex h-full w-full flex-col items-center gap-4 lg:gap-8">
        <div className="flex w-full lg:hidden">
          <NavBar stick={true} />
        </div>
        <div className="flex h-screen w-full flex-col items-center gap-4 overflow-hidden rounded-xl bg-white pb-4 shadow-xl shadow-slate-300/5 lg:gap-8 lg:p-8">
          <div className="fixed bottom-8 right-8 z-50 hidden lg:flex">
            <Button
              variant="tertiary"
              onClick={onClickHandler}
              classNameProp="py-6"
            >
              <FaAngleDoubleUp />
            </Button>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-4 lg:flex-row lg:gap-0">
            <div className="hidden lg:flex">
              <Button href="/courses" variant="tertiary">
                Courses list
              </Button>
            </div>
            <h1 className="order-first text-2xl font-bold text-slate-800 lg:order-none">
              {DataSet.name}
            </h1>
            <BackNextButtons currentId={currentId} data={data} />
          </div>
          <ScrollArea
            className="order-first w-full overflow-auto border-b-[1px] border-t-[1px] lg:order-none"
            ref={viewportRef}
          >
            <div className="flex w-full flex-col gap-8">
              <YoutubeVideo
                videoId={DataSet.videoId}
                videoTitle={DataSet.videoTitle}
                videoDesc={DataSet.videoDesc}
              />
              <TextPage currentId={currentId} />
              <Task
                title={DataSet.title}
                description={DataSet.description}
                href={DataSet.href}
                id={DataSet.id}
              />
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}

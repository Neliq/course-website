"use client";
import YoutubeVideo from "@/components/sections/video";
//import { Task } from "@/components/sections/task";
import { data } from "../data";
import { Button } from "@/components/atoms/button";
import { BackNextButtons } from "@/components/sections/back_next_buttons";
import { ScrollArea } from "@/components/ui/scroll-area";
import TextPage from "./text-page";

import { FaAngleDoubleUp } from "react-icons/fa";

import { useRef } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const DataSet = data.find((item) => item.id === params.id);
  let currentId = params.id;

  const viewportRef = useRef<HTMLDivElement>(null);

  const onClickHandler = () => {
    if (viewportRef !== null && viewportRef.current !== null) {
      // here scroll, Ex: to the right
      viewportRef.current.scrollTop = 0;
    }
  };

  if (!DataSet) {
    return <div>No data found for this id</div>;
  }
  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 overflow-hidden rounded-xl bg-white py-4 shadow-xl shadow-slate-300/5 lg:gap-8 lg:p-8">
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
        <h1 className="order-first text-xl font-semibold lg:order-none">
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
          {/* <Task
            title={DataSet.title}
            description={DataSet.description}
            href={DataSet.href}
            id={DataSet.id}
          /> */}
        </div>
      </ScrollArea>
    </div>
  );
}

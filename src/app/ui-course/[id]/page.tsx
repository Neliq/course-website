"use client";
import YoutubeVideo from "@/components/sections/video";
import { Task } from "@/components/sections/task";
import { data } from "../data";
import { Button } from "@/components/atoms/button";
import { BackNextButtons } from "@/components/sections/back_next_buttons";
import { ScrollArea } from "@/components/ui/scroll-area";
import TextPage from "@/components/sections/text-page";
import { FC, useEffect, useState } from "react";
import { CurrentIdContext } from "@/app/ui-course/[id]/currentId";

export default function Page({ params }: { params: { id: string } }) {
  const DataSet = data.find((item) => item.id === params.id);
  let currentId = params.id;

  const [DynamicComponent, setDynamicComponent] = useState<FC | null>(null);

  useEffect(() => {
    const loadDynamicComponent = async () => {
      try {
        const { Page: component } = await import(
          `../textpages/${currentId}.tsx`
        );
        setDynamicComponent(() => component);
      } catch (error) {
        console.error(`Failed to load component for id ${currentId}:`, error);
      }
    };

    loadDynamicComponent();
  }, [currentId]);

  if (!DataSet) {
    return <div>No data found for this id</div>;
  }
  return (
    <CurrentIdContext.Provider value={currentId}>
      {
        <div className="flex h-screen w-full flex-col items-center gap-4 overflow-hidden rounded-xl bg-white py-4 shadow-xl shadow-slate-300/5">
          <div className="lg-gap-0 flex w-full flex-col items-center justify-between gap-4 px-4 lg:flex-row">
            <Button href="/ui-course" variant="tertiary">
              Go back to course
            </Button>
            <h1 className="order-first text-xl font-semibold lg:order-none">
              {DataSet.name}
            </h1>
            <BackNextButtons currentId={currentId} data={data} />
          </div>
          <ScrollArea className="w-full overflow-auto px-4">
            <div className="flex w-full flex-col gap-16">
              <YoutubeVideo
                videoId={DataSet.videoId}
                videoTitle={DataSet.videoTitle}
                videoDesc={DataSet.videoDesc}
              />
              {DynamicComponent ? (
                <TextPage>
                  <DynamicComponent />
                </TextPage>
              ) : null}
              <Task
                title={DataSet.title}
                description={DataSet.description}
                href={DataSet.href}
                id={DataSet.id}
              />
            </div>
          </ScrollArea>
        </div>
      }
    </CurrentIdContext.Provider>
  );
}

import YoutubeVideo from "@/components/sections/video";
//import { Task } from "@/components/sections/task";
import { data } from "../data";
import { Button } from "@/components/atoms/button";
import { BackNextButtons } from "@/components/sections/back_next_buttons";
import { ScrollArea } from "@/components/ui/scroll-area";
import TextPage from "./text-page";

export default function Page({ params }: { params: { id: string } }) {
  const DataSet = data.find((item) => item.id === params.id);
  let currentId = params.id;

  if (!DataSet) {
    return <div>No data found for this id</div>;
  }
  return (
    <div className="flex h-screen w-full flex-col items-center gap-4 overflow-hidden rounded-xl bg-white py-4 shadow-xl shadow-slate-300/5">
      <div className="lg-gap-0 flex w-full flex-col items-center justify-between gap-4 px-4 lg:flex-row">
        <Button href="/next-js" variant="tertiary">
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

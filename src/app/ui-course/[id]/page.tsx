import { Header } from "@/components/sections/header";
import YoutubeVideo from "@/components/sections/video";
import { Task } from "@/components/sections/task";
import { data } from "../data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackNextButtons } from "@/components/sections/back_next_buttons";

export default function Page({ params }: { params: { id: string } }) {
  const DataSet = data.find((item) => item.id === params.id);
  let currentId = params.id;

  if (!DataSet) {
    return <div>No data found for this id</div>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <div className="z-10 w-full container m-8 items-center justify-between text-sm flex flex-col gap-8">
        <div className="w-full flex flex-col items-center gap-8">
          <Header selected="0" />
          <div className="w-full flex justify-between">
            <Link href="/ui-course">
              <Button>Go back to course</Button>
            </Link>
            <BackNextButtons currentId={currentId} data={data} />
          </div>

          <YoutubeVideo
            videoId={DataSet.videoId}
            videoTitle={DataSet.videoTitle}
            videoDesc={DataSet.videoDesc}
          />

          <Task
            title={DataSet.title}
            description={DataSet.description}
            href={DataSet.href}
          />

          <BackNextButtons currentId={currentId} data={data} />
        </div>
      </div>
    </main>
  );
}

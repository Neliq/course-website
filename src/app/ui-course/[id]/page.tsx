import { Header } from "@/components/sections/header";
import YoutubeVideo from "@/components/sections/video";
import { Task } from "@/components/sections/task";
import { data } from "../data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BackNextButtons } from "@/components/sections/back_next_buttons";
import { Background } from "@/components/sections/background";

export default function Page({ params }: { params: { id: string } }) {
  const DataSet = data.find((item) => item.id === params.id);
  let currentId = params.id;

  if (!DataSet) {
    return <div>No data found for this id</div>;
  }
  return (
    <Background>
      <div className="flex w-full flex-col items-center gap-8">
        <Header selected="0" />
        <div className="flex w-full flex-col items-center gap-4 rounded-xl bg-white p-4 shadow-xl shadow-slate-300/5">
          <div className="lg-gap-0 flex w-full flex-col items-center justify-between gap-4 lg:flex-row">
            <Link href="/ui-course">
              <Button>Go back to course</Button>
            </Link>
            <h1 className="order-first text-xl font-semibold lg:order-none">
              {DataSet.name}
            </h1>
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
    </Background>
  );
}

import NavBar from "@/components/molecules/navbar";
import { ContentList } from "@/components/sections/content-list";

export default function Home() {
  return (
    <div className="mx-auto flex h-svh w-full max-w-[1280px] flex-col gap-8 pb-4">
      <NavBar />
      <div className="flex h-full w-full flex-col items-center justify-between gap-8">
        <div className="flex h-full w-full flex-col items-center gap-4 rounded-lg bg-white p-8">
          <h1 className="text-semibold text-center text-xl text-slate-600">
            Course content list
          </h1>
          <ContentList />
        </div>
      </div>
    </div>
  );
}

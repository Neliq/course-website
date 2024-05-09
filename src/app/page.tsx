import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Guide } from "@/components/sections/guide";

export default function Home() {
  return (
    <main className="w-screen flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <div className="z-10 w-full container p-3 lg:p-8 items-center justify-between text-sm flex flex-col gap-8">
        <Header selected="1" />
        <Hero />
        <div className="w-full h-[1px] bg-slate-300 my-8" />
        <Guide />
      </div>
    </main>
  );
}

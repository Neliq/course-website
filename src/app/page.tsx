import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="w-screen flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <div className="z-10 w-screen p-4 lg:p-16 lg:max-w-[1210px] items-center justify-between text-sm flex flex-col gap-8">
        <Header selected="1" />
        <Hero />
      </div>
    </main>
  );
}

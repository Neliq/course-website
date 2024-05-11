import { Header } from "@/components/sections/header";
import { data } from "./data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Background } from "@/components/sections/background";

export default function Home() {
  return (
    <Background>
      <div className="flex w-full flex-col items-center justify-between gap-8">
        <Header selected="0" />
        <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-white p-8">
          <h1 className="text-semibold text-center text-xl text-slate-600">
            Course content list
          </h1>
          {data.map((item) => (
            <Link
              key={item.id}
              href={`/ui-course/${item.id}`}
              className="w-full max-w-[640px]"
            >
              <div className="flex w-full items-start justify-start rounded border-[1px] border-slate-300 bg-transparent bg-white p-4 text-black hover:text-blue-500">
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Background>
  );
}

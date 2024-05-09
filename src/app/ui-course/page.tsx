import { Header } from "@/components/sections/header";
import { data } from "./data";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-50">
      <div className="z-10 w-full container m-8 items-center justify-between text-sm flex flex-col gap-8">
        <Header selected="0" />
        <div className="flex flex-col items-center gap-4">
          {data.map((item) => (
            <Link key={item.id} href={`/ui-course/${item.id}`}>
              <Button className="bg-blue-600">{item.name}</Button>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

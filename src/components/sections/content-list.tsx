"use client";
import { data } from "@/app/next-js/data";
import Link from "next/link";
interface ContentListProps {
  page?: string;
}

export const ContentList: React.FC<ContentListProps> = ({ page }) => {
  return (
    <div className="flex w-full flex-col items-center gap-4">
      {data.map((item: any) => (
        <Link
          key={item.id}
          href={`/next-js/${item.id}`}
          className="w-full max-w-[640px]"
        >
          <div
            className={`flex w-full items-center justify-between rounded-full border-[1px] py-2 pl-4 pr-2 text-black hover:bg-indigo-50 ${page === item.id ? "border-[2px] border-indigo-500 text-indigo-600" : "border-[1px] border-slate-300"}`}
          >
            {item.name}
          </div>
        </Link>
      ))}
    </div>
  );
};

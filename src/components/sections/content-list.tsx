"use client";
import { data } from "@/app/next-js/data";
import Link from "next/link";
import { FaRegCheckCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";
interface ContentListProps {
  page?: string;
}

export const ContentList: React.FC<ContentListProps> = ({ page }) => {
  const { data: session } = useSession();
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    const fetchRecord = async () => {
      const response = await fetch(
        `/api/task?email=${encodeURIComponent(session?.user?.email ?? "")}&task=${encodeURIComponent(page ?? "")}`,
      );

      // If the response is OK and the response body is not empty, parse the JSON
      if (response.ok && response.body) {
        const data = await response.json();

        // If the record exists, set isSent to true
        if (data) {
          setIsSent(true);
        }
      }
    };

    fetchRecord();
  }, [session?.user?.email, page]);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {data.map((item: any) => (
        <Link
          key={item.id}
          href={`/next-js/${item.id}`}
          className="w-full max-w-[640px]"
        >
          <div
            className={`flex w-full items-center justify-between rounded-full border-[1px] py-2 pl-4 pr-2 text-black hover:bg-indigo-50 ${page === item.id ? "border-[1px] border-indigo-500 text-indigo-600" : "border-[1px] border-slate-300"}`}
          >
            {item.name}
            {isSent ? <FaRegCheckCircle /> : ""}
          </div>
        </Link>
      ))}
    </div>
  );
};

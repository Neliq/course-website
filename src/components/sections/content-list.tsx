"use client";
import { data } from "@/app/ui-course/data";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { FaRegCheckCircle } from "react-icons/fa";

interface ContentListProps {
  page?: string;
}

export const ContentList: React.FC<ContentListProps> = ({ page }) => {
  const { data: session } = useSession();
  const [isSent, setIsSent] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const fetchRecords = async () => {
      const promises = data.map(async (item) => {
        const response = await fetch(
          `/api/task?email=${encodeURIComponent(session?.user?.email ?? "")}&task=${encodeURIComponent(item.id)}`,
        );

        // If the response is OK and the response body is not empty, parse the JSON
        if (response.ok && response.body) {
          const data = await response.json();

          // If the record exists, set isSent for this item to true
          if (data) {
            setIsSent((prevState) => ({ ...prevState, [item.id]: true }));
          }
        }
      });

      await Promise.all(promises);
    };

    fetchRecords();
  }, [session?.user?.email]);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {data.map((item: any) => (
        <Link
          key={item.id}
          href={`/ui-course/${item.id}`}
          className="w-full max-w-[640px]"
        >
          <div
            className={`flex w-full items-center justify-between rounded-xl border-[1px] p-4 text-black  ${isSent[item.id] ? "bg-indigo-600 text-white hover:bg-indigo-500" : "bg-white hover:bg-indigo-50"} ${page === item.id ? "border-[2px] border-indigo-500 text-indigo-600" : "border-[1px] border-slate-300"}`}
          >
            {item.name}
            {isSent[item.id] ? (
              <FaRegCheckCircle className="size-5 text-white" />
            ) : (
              ""
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

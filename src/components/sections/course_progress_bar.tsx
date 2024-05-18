"use client";

import React, { useEffect, useState } from "react";
import { data } from "@/app/next-js/data"; // Import your data file

import { useSession } from "next-auth/react"; // Import useSession

import { motion } from "framer-motion";
import { animate } from "framer-motion";
import { useRef } from "react";

function Counter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        if (node) {
          node.textContent = value.toFixed(0);
        }
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return (
    <div className="flex justify-center">
      <p ref={nodeRef} />%
    </div>
  );
}

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const { data: session } = useSession(); // Use useSession to get the current session

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `/api/task2?email=${encodeURIComponent(session?.user?.email ?? "")}`,
      );

      if (response.ok && response.body) {
        const userRecords = await response.json();
        const totalRecords = data.length; // Get the total number of IDs in the data file
        const progressPercentage = (userRecords.count / totalRecords) * 100; // Calculate the progress percentage
        //console.log(progressPercentage);
        setProgress(progressPercentage);
      }
    };

    fetchData();
  }, [session?.user?.email]);

  console.log(progress);

  return (
    <div className="relative h-6 w-full overflow-hidden rounded-full bg-slate-700">
      <p
        className="absolute top-1 z-50 w-full text-center font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)]"
        style={{ lineHeight: "1rem" }}
      >
        <Counter from={0} to={Math.floor(progress)} />
      </p>
      <motion.div
        className="h-full bg-indigo-500 heropattern-diagonalstripes-indigo-400/50"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 2 }}
      />
    </div>
  );
}

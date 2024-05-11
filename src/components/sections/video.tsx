"use client";

import React from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import { useState } from "react";

interface YoutubeVideoProps {
  videoId: string;
  videoTitle: string;
  videoDesc: string;
}

const YoutubeVideo: React.FC<YoutubeVideoProps> = ({
  videoId,
  videoTitle,
  videoDesc,
}) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const [isExpanded, setIsExpanded] = useState(false);

  if (videoId === "") return null;

  return (
    <div className="flex w-full flex-col items-center gap-16 rounded-xl border-[1px] border-slate-200 bg-white p-8 lg:flex-row">
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-xl font-semibold">{videoTitle}</h1>
        <div className="">
          <p
            className={`line-clamp-3 max-w-[640px] text-justify lg:line-clamp-none ${isExpanded ? "line-clamp-none" : ""}`}
          >
            {videoDesc}
          </p>
          <button
            className="text-blue-500 lg:hidden"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        </div>
      </div>
      <div className="w-full min-w-[256px] max-w-[640px]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{
            position: "relative",
            height: "0",
            paddingBottom: "56.25%",
            width: "100%",
          }}
        >
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={_onReady}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

function _onReady(event: any) {
  event.target.pauseVideo();
}

export default YoutubeVideo;

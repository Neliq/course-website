"use client";

import { useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

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
    <div className="flex w-full flex-col items-start justify-between gap-8 rounded-xl border-[1px] border-slate-200 bg-white p-4 lg:flex-row lg:p-8">
      <div className="flex flex-col items-start gap-4 text-center lg:text-left">
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
      <div className="w-full min-w-[256px] max-w-[640px] overflow-hidden rounded-2xl">
        <div
          style={{
            position: "relative",
            height: "0",
            paddingBottom: "56.25%",
            width: "100%",
          }}
        >
          <LiteYouTubeEmbed id={videoId} title="" poster="maxresdefault" />
        </div>
      </div>
    </div>
  );
};

function _onReady(event: any) {
  event.target.pauseVideo();
}

export default YoutubeVideo;

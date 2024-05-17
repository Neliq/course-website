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
    <div className="flex w-full flex-col justify-center gap-8 rounded-xl border-[1px] border-slate-200 bg-neutral-950 lg:flex-row">
      <div className="w-full min-w-[256px] max-w-[1024px] overflow-hidden">
        <div>
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

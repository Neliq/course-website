"use client";

import React from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";

interface YoutubeVideoProps {
  videoId: string;
  videoTitle: string;
  videoDesc: string;
}

export default class YoutubeVideo extends React.Component<YoutubeVideoProps> {
  render() {
    const opts = {
      height: "100%",
      width: "100%",
      playerVars: {
        autoplay: 0,
      },
    };

    return (
      <div className="bg-white w-full items-center flex flex-col lg:flex-row p-8 rounded-xl gap-16">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-xl font-semibold">{this.props.videoTitle}</h1>
          <p className="max-w-[640px] text-justify">{this.props.videoDesc}</p>
        </div>
        <div className="w-full max-w-[640px] min-w-[256px]">
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
              videoId={this.props.videoId}
              opts={opts}
              onReady={this._onReady}
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
  }

  _onReady(event: any) {
    event.target.pauseVideo();
  }
}

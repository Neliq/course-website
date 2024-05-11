import * as React from "react";
import Image from "next/image";
import { GuideCard } from "./guide_card";

const Guide = () => {
  return (
    <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-between">
      <div className="flex flex-col items-center text-center">
        <h1 className="mb-16 text-2xl font-semibold text-slate-500">
          What will you find in our courses?
        </h1>
        <div className="flex flex-col gap-8 lg:flex-row">
          <GuideCard
            title="1.Video Materials"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            img="/guide-1.jpg"
          />
          <GuideCard
            title="2.Figma Files"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            img="/guide-2.jpg"
          />
          <GuideCard
            title="3. Feedback from Mentors"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            img="/guide-3.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export { Guide };

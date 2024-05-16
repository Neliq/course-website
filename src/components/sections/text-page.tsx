"use client";

import React from "react";

interface TextPageProps {
  children: React.ReactNode;
}

const TextPage: React.FC<TextPageProps> = ({ children }) => {
  return (
    <div className="flex w-full rounded-xl border-[1px] border-slate-200 bg-white p-8">
      <div className="prose lg:prose-xl ">{children}</div>
    </div>
  );
};

export default TextPage;

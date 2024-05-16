"use client";

import React, { FC, useEffect, useState } from "react";

interface TextPageProps {
  currentId: string;
}

const TextPage: React.FC<TextPageProps> = ({ currentId }) => {
  const [DynamicComponent, setDynamicComponent] = useState<FC | null>(null);

  useEffect(() => {
    const loadDynamicComponent = async () => {
      try {
        const { Page: component } = await import(
          `../textpages/${currentId}.tsx`
        );
        setDynamicComponent(() => component);
      } catch (error) {
        console.error(`Failed to load component for id ${currentId}:`, error);
      }
    };

    loadDynamicComponent();
  }, [currentId]);

  return DynamicComponent ? (
    <div className="flex w-full justify-center rounded-xl border-[1px] border-slate-200 bg-white p-4 lg:p-8">
      <div className="prose pt-16 lg:prose-xl">
        <DynamicComponent />
      </div>
    </div>
  ) : null;
};

export default TextPage;

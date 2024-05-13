"use client";
import React from "react";
import { Button } from "../ui/button";
import { useState } from "react";
import LoadingRotor from "./loading-rotor";

const MyButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };
  return (
    <Button onClick={handleClick}>
      <div className="flex items-center justify-center gap-4">
        Label
        {isLoading === true ? <LoadingRotor /> : ""}
      </div>
    </Button>
  );
};

export default MyButton;

"use client";

import { createContext, useContext } from "react";

export const CurrentIdContext = createContext<string | null>(null);

export function useCurrentId() {
  return useContext(CurrentIdContext);
}

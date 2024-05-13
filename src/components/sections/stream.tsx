import { Suspense } from "react";
import LoadingRotor from "./loading-rotor";

const Stream = ({ children }: { children: React.ReactNode }) => (
  <Suspense
    fallback={
      <div className="flex w-full justify-center">
        <LoadingRotor />
      </div>
    }
  >
    {children}
  </Suspense>
);

export { Stream };

"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

type BackNextButtonsProps = {
  currentId: string;
  data: { id: string }[];
};

const BackNextButtons: React.FC<BackNextButtonsProps> = ({
  currentId,
  data,
}) => {
  let nextId = Number(currentId) + 1;
  let previousId = Number(currentId) - 1;
  let nextItemExists = data.some((item) => item.id === nextId.toString());
  let previousItemExists = data.some(
    (item) => item.id === previousId.toString()
  );

  return (
    <div className="flex gap-4">
      {previousItemExists ? (
        <Link href={`/ui-course/${previousId}`}>
          <Button>Back</Button>
        </Link>
      ) : (
        <Button disabled>Back</Button>
      )}
      {nextItemExists ? (
        <Link href={`/ui-course/${nextId}`}>
          <Button>Next</Button>
        </Link>
      ) : (
        <Button disabled>Next</Button>
      )}
    </div>
  );
};

export { BackNextButtons };

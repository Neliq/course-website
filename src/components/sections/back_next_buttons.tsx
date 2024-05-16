"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "../atoms/button";

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
    (item) => item.id === previousId.toString(),
  );

  return (
    <div className="flex gap-4">
      {previousItemExists ? (
        <Button variant="tertiary" href={`/ui-course/${previousId}`}>
          Back
        </Button>
      ) : (
        <Button variant="disabled">Back</Button>
      )}
      {nextItemExists ? (
        <Button variant="tertiary" href={`/ui-course/${nextId}`}>
          Next
        </Button>
      ) : (
        <Button variant="disabled">Next</Button>
      )}
    </div>
  );
};

export { BackNextButtons };

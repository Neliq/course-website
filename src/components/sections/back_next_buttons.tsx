"use client";

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
        <Button variant="tertiary" href={`/next-js/${previousId}`}>
          Back
        </Button>
      ) : (
        <Button variant="disabled">Back</Button>
      )}
      {nextItemExists ? (
        <Button variant="tertiary" href={`/next-js/${nextId}`}>
          Next
        </Button>
      ) : (
        <Button variant="disabled">Next</Button>
      )}
    </div>
  );
};

export { BackNextButtons };

"use client";

import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import { LuLoader2 } from "react-icons/lu";

export function SubmitCreation() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled size="lg">
          <LuLoader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button type="submit" size="lg">
          Next
        </Button>
      )}
    </>
  );
}

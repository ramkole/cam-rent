import { Button } from "@/components/ui/button";
import { SubmitCreation } from "./SubmitButton";
import Link from "next/link";

export function FromBottomBar() {
  return (
    <div className="fixed w-full bottom-0 z-10 bg-yellow-100 border-t h-24">
      <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
        <Button variant="secondary" size="lg">
          <Link href="/">Cancel</Link>
        </Button>
        <SubmitCreation />
      </div>
    </div>
  );
}

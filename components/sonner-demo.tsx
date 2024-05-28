import { toast } from "sonner";

import { Button } from "@/components/ui/button";

export function SonnerDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toast(
          <div className="bg-zinc-700 text-white">
            A custom toast with default styling
          </div>,
          {
            duration: 5000,
          }
        )
      }
    >
      Show Toast
    </Button>
  );
}

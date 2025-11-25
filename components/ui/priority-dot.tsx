import { cn } from "@/lib/utils";

const PRIORITY_COLOR: Record<string, string> = {
    p0: "bg-bad",
    p1: "bg-warn",
    p2: "bg-good",
    p3: "bg-border",
};

export function PriorityDot({ priority }: { priority: "p0" | "p1" | "p2" | "p3" }) {
    return (
        <div
            className={cn(
                "h-2.5 w-2.5 rounded-full ring-2 ring-bg",
                PRIORITY_COLOR[priority]
            )}
            aria-label={`priority ${priority}`}
        />
    );
}

import Link from "next/link";
import { PriorityDot } from "./priority-dot";
import { Pill } from "./pill";
import { WorkObject } from "@/lib/types";

export function WorkObjectCard({
    wo,
    compact,
}: {
    wo: WorkObject;
    compact?: boolean;
}) {
    return (
        <Link
            href={`/work-objects/${wo.id}`}
            className="group block rounded-lg border border-border bg-card px-4 py-3 shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-soft-lg"
        >
            <div className="flex items-center gap-3">
                <PriorityDot priority={wo.priority} />
                <div className="min-w-0 flex-1">
                    <div className="truncate font-medium tracking-tight">{wo.title}</div>
                    {!compact && (
                        <div className="truncate text-sm text-muted">{wo.summary}</div>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <Pill tone="neutral">{wo.type}</Pill>
                    <div className="text-xs text-muted">{Math.round(wo.confidence * 100)}%</div>
                    <div className="text-muted transition group-hover:translate-x-0.5">›</div>
                </div>
            </div>
        </Link>
    );
}

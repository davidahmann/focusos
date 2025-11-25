import { LedgerEvent } from "@/lib/types";

export function LedgerRow({ e }: { e: LedgerEvent }) {
    return (
        <div className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2 shadow-soft">
            <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-accent/70" />
                <div className="text-sm">
                    <div className="font-medium">{e.verb}</div>
                    <div className="text-xs text-muted">{e.rationale}</div>
                </div>
            </div>
            <div className="text-xs text-muted">{Math.round(e.confidence * 100)}%</div>
        </div>
    );
}

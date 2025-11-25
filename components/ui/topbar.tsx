import { Badge } from "./badge";

export function TopBar() {
    const today = new Date().toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
    });

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <div className="h-7 w-7 rounded-md bg-accent/10 ring-1 ring-accent/30" />
                    <div>
                        <div className="text-sm font-semibold tracking-tight">Focus OS</div>
                        <div className="text-xs text-muted">{today}</div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Badge variant="accent">Focus Mode: ON</Badge>
                    <Badge variant="good">Critical Misses: 0</Badge>
                    <div className="ml-2 h-8 w-8 rounded-full bg-border" />
                </div>
            </div>
        </header>
    );
}

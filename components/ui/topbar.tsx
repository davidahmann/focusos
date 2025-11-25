import { Sparkles } from "lucide-react";

export function TopBar() {
    const today = new Date().toLocaleDateString(undefined, {
        weekday: "long",
        month: "short",
        day: "numeric",
    });

    return (
        <header className="sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
            <div className="mx-auto flex h-14 max-w-[1100px] items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/20">
                        <Sparkles size={16} />
                    </div>
                    <div>
                        <div className="text-sm font-semibold tracking-tight">Focus OS</div>
                        <div className="flex items-center gap-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-good" />
                            <div className="text-xs text-muted">Connected to Slack</div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <nav className="flex items-center gap-4 text-sm font-medium text-muted">
                        <a href="/drafts" className="hover:text-fg transition-colors">Drafts</a>
                        <a href="/ledger" className="hover:text-fg transition-colors">Ledger</a>
                    </nav>
                    <div className="h-4 w-px bg-border" />
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-3 py-1 text-xs font-medium text-accent">
                            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                            Focus Mode: ON
                        </div>
                        <div className="flex items-center gap-1.5 rounded-full border border-good/20 bg-good/5 px-3 py-1 text-xs font-medium text-good">
                            <div className="h-1.5 w-1.5 rounded-full bg-good" />
                            Critical Misses: 0
                        </div>
                        <div className="ml-2 h-8 w-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 ring-2 ring-bg" />
                    </div>
                </div>
            </div>
        </header>
    );
}

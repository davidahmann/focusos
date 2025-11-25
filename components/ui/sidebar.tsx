"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

const navItems = [
    { name: "Daily Briefing", href: "/" },
    { name: "Drafts", href: "/drafts", count: true },
    { name: "Ledger", href: "/ledger" },
    { name: "Settings", href: "/settings" },
];

const workObjects = [
    { name: "Rollback search rollout", href: "/work-objects/wo-1", active: true },
    { name: "Frame churn line", href: "/work-objects/wo-2" },
    { name: "Approve Q4 Budget", href: "/work-objects/d-3" },
    { name: "Select offsite venue", href: "/work-objects/d-4" },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-[240px] border-r border-border bg-bg p-6">
            <div className="mb-8 flex items-center gap-2 px-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-accent/10 text-accent">
                    <Sparkles size={14} />
                </div>
                <div className="text-sm font-semibold tracking-tight">Focus OS</div>
            </div>

            <nav className="space-y-1">
                {navItems.map((item) => {
                    const isActive =
                        item.href === "/"
                            ? pathname === "/"
                            : pathname.startsWith(item.href);

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors relative",
                                isActive
                                    ? "bg-accent/5 text-accent"
                                    : "text-muted hover:bg-accent/5 hover:text-fg"
                            )}
                        >
                            {isActive && (
                                <div className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-accent" />
                            )}
                            <div className="flex items-center gap-3">
                                <span className={cn("pl-2")}>{item.name}</span>
                            </div>
                            {item.count && (
                                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                            )}
                        </Link>
                    );
                })}

                <div className="pt-4 pb-2 px-3 text-xs font-medium text-muted/70 uppercase tracking-wider">
                    Work Objects
                </div>

                {workObjects.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors relative",
                                isActive
                                    ? "bg-accent/5 text-accent"
                                    : "text-muted hover:bg-accent/5 hover:text-fg"
                            )}
                        >
                            {isActive && (
                                <div className="absolute left-0 top-1/2 h-5 w-1 -translate-y-1/2 rounded-r-full bg-accent" />
                            )}
                            <div className="flex items-center gap-3">
                                <span className={cn("pl-2 truncate")}>{item.name}</span>
                            </div>
                        </Link>
                    );
                })}
            </nav>

            <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 rounded-lg border border-border bg-card p-3 shadow-soft">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-good" />
                    <div className="text-xs font-medium text-muted">System Active</div>
                </div>
            </div>
        </aside>
    );
}

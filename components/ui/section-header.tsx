import { cn } from "@/lib/utils";

export function SectionHeader({
    title,
    hint,
    right,
    className,
}: {
    title: string;
    hint?: string;
    right?: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("flex items-center justify-between", className)}>
            <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold tracking-tight">{title}</h2>
                {hint && (
                    <span className="rounded-full bg-bg px-2 py-0.5 text-[10px] text-muted ring-1 ring-border">
                        {hint}
                    </span>
                )}
            </div>
            {right}
        </div>
    );
}

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
    {
        variants: {
            variant: {
                neutral: "border-border bg-bg text-muted",
                accent: "border-accent/30 bg-accent/10 text-fg",
                good: "border-good/30 bg-good/10 text-fg",
                warn: "border-warn/30 bg-warn/10 text-fg",
                bad: "border-bad/30 bg-bad/10 text-fg",
            },
        },
        defaultVariants: {
            variant: "neutral",
        },
    }
);

export interface BadgeProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> { }

export function Badge({ className, variant, ...props }: BadgeProps) {
    return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

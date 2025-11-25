import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-accent/30 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-accent text-white hover:bg-accent/90",
                secondary: "bg-bg border border-border text-fg hover:bg-card",
                ghost: "bg-transparent text-fg hover:bg-card",
                destructive: "bg-bad text-white hover:bg-bad/90",
            },
            size: {
                default: "h-9 px-3 py-2",
                sm: "h-8 px-2.5 text-xs",
                xs: "h-7 px-2 text-[11px]",
                lg: "h-10 px-4",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

export function Button({
    className,
    variant,
    size,
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        />
    );
}

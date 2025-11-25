import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> { }

export function Input({ className, ...props }: InputProps) {
    return (
        <input
            className={cn(
                "flex h-9 w-full rounded-md border border-border bg-bg px-3 py-1 text-sm text-fg shadow-soft outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-accent/30",
                className
            )}
            {...props}
        />
    );
}

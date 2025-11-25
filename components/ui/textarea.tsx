import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
    extends React.TextareaHTMLAttributes<HTMLTextAreaElement> { }

export function Textarea({ className, ...props }: TextareaProps) {
    return (
        <textarea
            className={cn(
                "flex w-full resize-none rounded-md border border-border bg-bg px-3 py-2 text-sm text-fg shadow-soft outline-none placeholder:text-muted focus-visible:ring-2 focus-visible:ring-accent/30",
                className
            )}
            {...props}
        />
    );
}

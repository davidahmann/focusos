import { Badge, BadgeProps } from "./badge";

export function Pill({ tone, ...props }: Omit<BadgeProps, "variant"> & { tone?: "neutral" | "accent" | "good" | "warn" | "bad" }) {
    return <Badge variant={tone || "neutral"} {...props} />;
}

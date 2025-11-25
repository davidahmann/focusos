export function HeroStrip({ headline, sub }: { headline: string; sub: string }) {
    return (
        <div className="rounded-xl border border-border bg-gradient-to-br from-card to-accent/5 px-6 py-5 shadow-soft">
            <div className="text-2xl font-semibold tracking-tight">{headline}</div>
            <div className="mt-1 text-sm text-muted">{sub}</div>
        </div>
    );
}

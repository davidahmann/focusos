export function LedgerDigest({ digest }: { digest: { handled: number; decisionsWaiting: number; criticalMisses: number } }) {
    return (
        <div className="rounded-lg border border-border bg-card p-4 shadow-soft">
            <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                    <div className="text-2xl font-semibold">{digest.handled}</div>
                    <div className="text-xs text-muted">Handled</div>
                </div>
                <div>
                    <div className="text-2xl font-semibold">{digest.decisionsWaiting}</div>
                    <div className="text-xs text-muted">Decisions waiting</div>
                </div>
                <div>
                    <div className="text-2xl font-semibold">{digest.criticalMisses}</div>
                    <div className="text-xs text-muted">Critical misses</div>
                </div>
            </div>
        </div>
    );
}

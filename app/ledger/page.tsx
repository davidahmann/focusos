import { LedgerDigest, LedgerRow, SectionHeader } from "@/components/ui";
import { mockLedger } from "@/lib/mock-data";

export default function LedgerPage() {
    return (
        <div className="space-y-4">
            <SectionHeader title="Safety Ledger" />
            <LedgerDigest digest={mockLedger.digest} />
            <div className="space-y-2">
                {mockLedger.events.map((e) => (
                    <LedgerRow key={e.id} e={e} />
                ))}
            </div>
        </div>
    );
}

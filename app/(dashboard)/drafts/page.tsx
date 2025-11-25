import { DraftCard, SectionHeader } from "@/components/ui";
import { mockDrafts } from "@/lib/mock-data";

export default function DraftsPage() {
    return (
        <div className="space-y-4">
            <SectionHeader title={`Drafts awaiting approval (${mockDrafts.length})`} />
            <div className="space-y-3">
                {mockDrafts.map((d) => (
                    <DraftCard key={d.id} draft={d} />
                ))}
            </div>
        </div>
    );
}

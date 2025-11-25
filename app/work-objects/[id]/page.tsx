import { WorkObjectDetail } from "@/components/ui/work-object-detail";
import { mockWorkObjectsById } from "@/lib/mock-data";

export default async function WorkObjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const wo = mockWorkObjectsById[id];

    if (!wo) return <div className="text-sm text-muted">Not found.</div>;
    return <WorkObjectDetail wo={wo} />;
}

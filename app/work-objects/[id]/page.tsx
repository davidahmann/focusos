import { WorkObjectDetail } from "@/components/ui/work-object-detail";
import { mockWorkObjectsById } from "@/lib/mock-data";

export default function WorkObjectPage({ params }: { params: { id: string } }) {
    const wo = mockWorkObjectsById[params.id];
    if (!wo) return <div className="text-sm text-muted">Not found.</div>;
    return <WorkObjectDetail wo={wo} />;
}

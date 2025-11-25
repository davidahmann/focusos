import {
  HeroStrip,
  SectionHeader,
  WorkObjectCard,
  Tooltip,
} from "@/components/ui";
import { mockBriefing } from "@/lib/mock-data";

export default function HomePage() {
  const { decisions, tasks, fyis, noiseCount, noiseTopSources } = mockBriefing;

  return (
    <div className="space-y-8">
      <HeroStrip
        headline="12 items need your brain today."
        sub="Last 24h: 142 messages handled • 5 rules learned"
      />

      <section className="space-y-3">
        <SectionHeader title={`Decisions (${decisions.length})`} hint="P0 first" />
        <div className="space-y-2">
          {decisions.map((wo) => (
            <WorkObjectCard key={wo.id} wo={wo} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionHeader title={`Tasks (${tasks.length})`} />
        <div className="space-y-2">
          {tasks.map((wo) => (
            <WorkObjectCard key={wo.id} wo={wo} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <SectionHeader title={`FYIs (${fyis.length})`} />
        <div className="space-y-2">
          {fyis.slice(0, 3).map((wo) => (
            <WorkObjectCard key={wo.id} wo={wo} compact />
          ))}
          {fyis.length > 3 && (
            <div className="text-xs text-muted">Show {fyis.length - 3} more…</div>
          )}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <Tooltip
            trigger={
              <div className="cursor-help decoration-dotted underline-offset-4 hover:underline">
                <SectionHeader title={`Noise filtered (${noiseCount})`} />
              </div>
            }
          >
            <div className="space-y-1">
              <div className="font-medium">Auto-filtered by your policies</div>
              <div className="text-xs text-muted">
                Top sources: {noiseTopSources.join(", ")}
              </div>
            </div>
          </Tooltip>
        </div>
        <div className="rounded-lg border border-border bg-card p-4 text-sm text-muted">
          127 messages safely muted.
        </div>
      </section>
    </div>
  );
}

import { Pill } from "./pill";
import { Button } from "./button";
import { WorkObject } from "@/lib/types";

export function WorkObjectDetail({ wo }: { wo: WorkObject }) {
    return (
        <div className="space-y-6">
            <header className="flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-semibold tracking-tight">{wo.title}</h1>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        <Pill tone="neutral">{wo.type}</Pill>
                        <Pill tone="accent">{wo.priority.toUpperCase()}</Pill>
                        <Pill tone="neutral">Confidence {Math.round(wo.confidence * 100)}%</Pill>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="secondary">Open in Slack</Button>
                    <Button variant="ghost">View raw thread</Button>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-8 space-y-5">
                    <section className="rounded-lg border border-border bg-card p-4 shadow-soft">
                        <div className="text-sm font-medium">Summary</div>
                        <p className="mt-2 text-sm text-muted">{wo.summaryLong ?? wo.summary}</p>
                    </section>

                    {wo.decision_context && (
                        <section className="rounded-lg border border-border bg-card p-4 shadow-soft">
                            <div className="text-sm font-medium">Decision context</div>
                            <ul className="mt-2 list-disc pl-5 text-sm text-muted">
                                {wo.decision_context.options_considered?.map((o) => (
                                    <li key={o}>{o}</li>
                                ))}
                            </ul>
                            <div className="mt-3 text-sm">
                                <div className="font-medium">Recommended action</div>
                                <div className="text-muted">{wo.decision_context.recommended_action}</div>
                                <div className="mt-2 text-xs text-muted">
                                    {wo.decision_context.justification}
                                </div>
                            </div>
                        </section>
                    )}

                    {wo.action_items?.length ? (
                        <section className="rounded-lg border border-border bg-card p-4 shadow-soft">
                            <div className="text-sm font-medium">Action items</div>
                            <div className="mt-2 space-y-2">
                                {wo.action_items.map((a, i) => (
                                    <div key={i} className="flex items-center justify-between text-sm">
                                        <div className="text-muted">{a.description}</div>
                                        <div className="text-xs text-muted">
                                            {a.owner} • {a.due_date}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ) : null}
                </div>

                <aside className="col-span-12 md:col-span-4 space-y-4">
                    <section className="rounded-lg border border-border bg-card p-4 shadow-soft">
                        <div className="text-sm font-medium">Participants</div>
                        <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted">
                            {wo.participants.map((p) => (
                                <Pill key={p} tone="neutral">{p}</Pill>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-lg border border-border bg-card p-4 shadow-soft">
                        <div className="text-sm font-medium">Policy matches</div>
                        <div className="mt-2 space-y-2">
                            {wo.policy_matches?.map((m) => (
                                <div key={m.policy_id} className="text-xs text-muted">
                                    “{m.rule}” • {Math.round(m.confidence * 100)}%
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-lg border border-border bg-card p-4 shadow-soft">
                        <div className="text-xs text-muted">
                            Updated {wo.timestamp}
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    );
}

import { Draft, LedgerEvent, WorkObject } from "./types";

export const mockBriefing = {
    decisions: [
        {
            id: "wo-1",
            type: "decision",
            title: "Rollback search rollout to stop DB latency spike?",
            summary: "Prod p95 at 780ms. Need founder call: rollback vs scale replicas.",
            participants: ["@cto", "@eng1", "@pm"],
            confidence: 0.91,
            priority: "p0",
            timestamp: "Today 08:44",
            decision_context: {
                options_considered: ["Rollback rollout", "Scale read replicas"],
                recommended_action: "Rollback search rollout now.",
                justification: "Locks persist and risk Sev-1 escalation before noon.",
            },
            policy_matches: [
                { policy_id: "r1", rule: "Escalate Sev-1 incidents", confidence: 0.98 },
            ],
        },
        {
            id: "wo-2",
            type: "decision",
            title: "Frame churn line for IC narrative",
            summary: "Investor needs churn explanation for ARR bridge by 1pm.",
            participants: ["@investor", "@pm", "@cto"],
            confidence: 0.86,
            priority: "p1",
            timestamp: "Today 09:08",
            decision_context: {
                recommended_action: "Call it a one-off enterprise contraction.",
                justification: "Truthful, bounded, and doesn’t imply systemic churn.",
            },
            policy_matches: [
                { policy_id: "r2", rule: "Investor threads always P1+", confidence: 0.94 },
            ],
        },
    ] as WorkObject[],
    tasks: [
        {
            id: "wo-3",
            type: "task",
            title: "Send SOC2 pack to Account Y",
            summary: "CS asked for security posture doc. PM ready to send.",
            participants: ["@cs", "@pm"],
            confidence: 0.9,
            priority: "p2",
            timestamp: "Yesterday 22:06",
            action_items: [{ description: "Attach SOC2 pack", owner: "@pm", due_date: "Today" }],
        },
    ] as WorkObject[],
    fyis: [
        {
            id: "wo-4",
            type: "fyi",
            title: "Infra cost alert: Redis spend up 22%",
            summary: "Not blocking, review after incident.",
            participants: ["@pm", "@cto"],
            confidence: 0.88,
            priority: "p3",
            timestamp: "Today 01:14",
        },
    ] as WorkObject[],
    noiseCount: 127,
    noiseTopSources: ["#random", "#marketing"],
};

export const mockWorkObjectsById = Object.fromEntries(
    [...mockBriefing.decisions, ...mockBriefing.tasks, ...mockBriefing.fyis].map((w) => [w.id, w])
);

export const mockDrafts: Draft[] = [
    {
        id: "d1",
        channel: "#fundraising",
        sender: "@investor",
        contextSnippet: "Need narrative for churn line in ARR bridge.",
        text: "We’ll frame Q3 churn as a one-off enterprise contraction tied to product transition, not a systemic retention issue.",
    },
];

export const mockLedger = {
    digest: { handled: 142, decisionsWaiting: 5, criticalMisses: 0 },
    events: [
        { id: "l1", verb: "Ignored #marketing thread", rationale: "Rule: ignore marketing unless @mention", confidence: 0.97 },
        { id: "l2", verb: "Drafted response to @investor", rationale: "Matched prior IC tone + policy memory", confidence: 0.89 },
        { id: "l3", verb: "Escalated Sev-1 incident", rationale: "Policy: Sev-1 → P0 Decision", confidence: 0.98 },
    ] as LedgerEvent[],
};

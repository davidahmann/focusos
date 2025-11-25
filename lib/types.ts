export type Priority = "p0" | "p1" | "p2" | "p3";
export type WorkType = "decision" | "task" | "fyi" | "noise";

export type PolicyMatch = {
    policy_id: string;
    rule: string;
    confidence: number;
};

export type ActionItem = {
    description: string;
    owner: string;
    due_date: string;
};

export type DecisionContext = {
    options_considered?: string[];
    recommended_action: string;
    justification: string;
};

export type WorkObject = {
    id: string;
    type: WorkType;
    title: string;
    summary: string;
    summaryLong?: string;
    participants: string[];
    confidence: number;
    priority: Priority;
    timestamp: string;
    action_items?: ActionItem[];
    decision_context?: DecisionContext;
    policy_matches?: PolicyMatch[];
};

export type Draft = {
    id: string;
    channel: string;
    sender: string;
    contextSnippet: string;
    text: string;
};

export type LedgerEvent = {
    id: string;
    verb: string;
    rationale: string;
    confidence: number;
};

"use client";
import { useState } from "react";
import { Button } from "./button";
import { InlineRulePrompt } from "./inline-rule-prompt";
import { Draft } from "@/lib/types";

export function DraftCard({ draft }: { draft: Draft }) {
    const [text, setText] = useState(draft.text);
    const [edited, setEdited] = useState(false);

    return (
        <div className="rounded-lg border border-border bg-card p-4 shadow-soft">
            <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                    <div className="text-sm font-medium">
                        {draft.sender} in {draft.channel}
                    </div>
                    <div className="text-xs text-muted">{draft.contextSnippet}</div>
                </div>
                <div className="flex gap-2">
                    <Button size="sm">Approve</Button>
                    <Button size="sm" variant="secondary" onClick={() => setEdited(true)}>
                        Edit
                    </Button>
                    <Button size="sm" variant="ghost">Reject</Button>
                </div>
            </div>

            <textarea
                className="mt-3 w-full resize-none rounded-md border border-border bg-bg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/30"
                rows={3}
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    setEdited(true);
                }}
            />

            {edited && (
                <InlineRulePrompt
                    prompt={`You changed tone to Formal for ${draft.sender}. Apply rule?`}
                    onYes={() => setEdited(false)}
                    onNo={() => setEdited(false)}
                />
            )}
        </div>
    );
}

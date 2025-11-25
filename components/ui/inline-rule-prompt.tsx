import { Button } from "./button";

export function InlineRulePrompt({
    prompt,
    onYes,
    onNo,
}: {
    prompt: string;
    onYes: () => void;
    onNo: () => void;
}) {
    return (
        <div className="mt-3 flex items-center justify-between rounded-md border border-accent/30 bg-accent/5 px-3 py-2">
            <div className="text-xs text-fg">{prompt}</div>
            <div className="flex gap-2">
                <Button size="xs" onClick={onYes}>Yes</Button>
                <Button size="xs" variant="secondary" onClick={onNo}>No</Button>
            </div>
        </div>
    );
}

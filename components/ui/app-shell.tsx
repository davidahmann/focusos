import { TopBar } from "./topbar";

export function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-bg text-fg">
            <TopBar />
            <main className="mx-auto max-w-[1100px] px-6 py-6">
                {children}
            </main>
        </div>
    );
}

import { Sidebar } from "./sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-bg text-fg flex">
            <Sidebar />
            <main className="flex-1 ml-[240px] px-12 py-10 max-w-[1000px]">
                {children}
            </main>
        </div>
    );
}

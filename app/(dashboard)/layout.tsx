import { AppShell } from "@/components/ui";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AppShell>{children}</AppShell>
    );
}

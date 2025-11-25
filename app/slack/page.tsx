import Image from "next/image";

export default function SlackMockPage() {
    return (
        <div className="h-screen w-screen overflow-hidden bg-[#1A1D21]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src="/slack-mock.png"
                alt="Slack Mock Interface"
                className="h-full w-full object-contain"
            />
        </div>
    );
}

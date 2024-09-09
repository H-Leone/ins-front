"use client";

import { IResearchTopic } from "@/types/research-topic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MouseEventHandler } from "react";

function ResearchTopicCard({ id, name, answers }: IResearchTopic) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleClick: MouseEventHandler<HTMLInputElement> = (e) => {
        const params = new URLSearchParams(searchParams);

        params.set("topic", id.toString());
        
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div onClick={handleClick} className="w-full flex justify-between items-center border border-insightfy-dark-gray px-5 py-4 rounded-lg cursor-pointer hover:bg-insightfy-light-gray duration-200">
            <p>{name}</p>

            <p>{answers}</p>
        </div>
    );
}

export default ResearchTopicCard;
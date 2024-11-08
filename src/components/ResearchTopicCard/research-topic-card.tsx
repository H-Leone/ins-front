"use client";

import { ITopic } from "@/types/topic";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MouseEventHandler } from "react";

function ResearchTopicCard({ topic }: { topic?: ITopic }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleClick: MouseEventHandler<HTMLInputElement> = (e) => {
        const params = new URLSearchParams(searchParams);

        if(topic) {
            params.set("topic", topic.id.toString());
            
            replace(`${pathname}?${params.toString()}`);
        } else {
            params.delete("topic");
            
            replace(`${pathname}?${params.toString()}`);
        }
    }

    return (
        <div onClick={handleClick} className="w-full flex justify-between items-center border border-insightfy-dark-gray px-5 py-4 rounded-lg cursor-pointer hover:bg-insightfy-light-gray duration-200">

            {topic ? (
                <>
                    <p>{topic?.name}</p>

                    <p>144</p>
                </>
            ) : (
                <p>RELATÓRIO</p>
            )}
            
        </div>
    );
}

export default ResearchTopicCard;
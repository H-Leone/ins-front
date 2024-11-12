"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IInsightfyTabsProps } from "../InsightfyTabs/insightfy-tabs";

function TabCard({ name, path, content, currentTab }: IInsightfyTabsProps & { currentTab: string }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleClick = () => {
        const params = new URLSearchParams(searchParams);
        const query = path;

        if(query) {
            params.set("tab", query);
        } else {
            params.delete("tab");
        }
        
        replace(`${pathname}?${params.toString()}`);
    }
    
    return (
        <li
            onClick={handleClick}
            className={`w-full text-center md:text-md text-sm px-4 py-3 font-semibold border-b-[3px] ${path === currentTab
                ? "text-insightfy-blue border-insightfy-blue"
                : "text-insightfy-dark-gray border-insightfy-light-gray"
                } `}
        >
            {name}
        </li>
    );
}

export default TabCard;
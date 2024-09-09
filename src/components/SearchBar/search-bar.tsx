"use client";

import { Search } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";

interface SearchBarProps {
    width?: number;
}

function SearchBar({ width }: SearchBarProps) {
    const searchParams = useSearchParams();
    const search = searchParams.get("search");
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const params = new URLSearchParams(searchParams);
        const query = e.target.value;

        if(query) {
            params.set("search", query);
        } else {
            params.delete("search");
        }
        
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <div className={`${width ? `w-[${width}]` : "w-full"} bg-insightfy-light-gray flex items-center gap-3 h-12 px-4 py-2 rounded-md`}>

            <Search size={22.5} className="text-placeholder-text" />
            
            <input defaultValue={search || ""} onChange={handleChange} className="w-full bg-insightfy-light-gray flex h-full outline-none" type="text" placeholder="Pesquisar..." />

        </div>
    );
}

export default SearchBar;
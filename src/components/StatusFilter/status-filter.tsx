"use client";

import { Filter } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEventHandler } from "react";

interface IStatusFilterProps {
    options: { label: string; value: any }[];
    status?: string;
}

function StatusFilter({ status, options }: IStatusFilterProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
        const params = new URLSearchParams(searchParams);
        const query = e.target.selectedOptions[0].value;

        if(query) {
            params.set("status", query);
        } else {
            params.delete("status");
        }
        
        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <span className="relative flex items-center">
            <span className="flex justify-center items-center absolute top-1/2 -translate-y-1/2 left-3">
                <Filter size={20} />
            </span>
            <select defaultValue={status} onChange={handleChange} className="w-40 h-9 indent-10 rounded-lg bg-insightfy-light-gray cursor-pointer outline-none">
                {options.map(({ label, value }) => (
                    <option key={value} value={label}>
                        {value || "All"}
                    </option>
                ))}
            </select>
        </span>
    );
}

export default StatusFilter;
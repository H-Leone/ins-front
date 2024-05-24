"use client";

import { normalizeString } from "@/utils/stringNomalizer";
import { INavItem } from "@/types/nav-item";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Props {
    gradient?: boolean;
}

function NavItemCard({ gradient, name, subItems }: INavItem & Props) {
    const ref = useRef<HTMLSpanElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const url = normalizeString(name).toLowerCase();

    const handleClick: React.MouseEventHandler = (e) => {
        if (subItems) {
            e.preventDefault();
            setIsOpen((prev) => !prev);
        }
    };

    useEffect(() => {
        const windowClick = (e: any) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        }

        window.addEventListener("click", windowClick);

        return () => {
            window.removeEventListener("click", windowClick);
        }
    }, []);

    return (
        <span
            ref={ref}
            className={`relative px-3 py-2 rounded ${gradient && "bg-insightfy-gradient text-white"} font-medium`}
        >

            <Link href={`/${url}`}>

                <span onClick={handleClick} className="flex items-center gap-2">
                    <p>{name}</p>

                    {subItems && (
                        <ChevronDown size={20} />
                    )}
                </span>

            </Link>

            {(subItems && isOpen) && (
                <nav className="w-full text-center absolute top-10 left-0 bg-white border border-gray-300 rounded-md select-none">
                    {subItems.map((subItem, index) => {
                        const subUrl = normalizeString(subItem).toLowerCase();

                        return (
                            <Link key={index} href={`/${subUrl}`}>
                                <p key={index} className="cursor-pointer p-2 hover:bg-gray-200">{subItem}</p>
                            </Link>
                        );
                    })}
                </nav>
            )}

        </span>
    );
}

export default NavItemCard;
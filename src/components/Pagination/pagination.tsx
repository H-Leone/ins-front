"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, MouseEventHandler, ChangeEvent, FormEvent, useRef, useEffect } from "react";

interface IPaginationProps {
    page: number;
}

function Pagination({ page }: IPaginationProps) {
    const maxPage = 10;
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [inputPage, setInputPage] = useState<number | "">(page);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsInputVisible(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const buttonStyle = (pageNumber: number) =>
        `flex justify-center items-center w-10 h-10 text-center ${
            pageNumber === page
                ? "text-insightfy-blue border-insightfy-blue"
                : "text-black border-insightfy-light-gray"
        } rounded-md font-bold border disabled:bg-gray-300 disabled:border-0 disabled:text-insightfy-light-gray disabled:cursor-not-allowed`;

    const goToPage: MouseEventHandler = (event) => {
        const pageNumber = parseInt(event.currentTarget.getAttribute("data-page")!, 10);

        if (isNaN(pageNumber) || pageNumber < 1 || pageNumber > maxPage) return;

        const params = new URLSearchParams(searchParams);

        if (pageNumber) {
            params.set("pagination", pageNumber.toString());
        } else {
            params.delete("pagination");
        }

        replace(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputPage(value === "" ? "" : parseInt(value, 10));
    };

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        
        if (inputPage && !isNaN(inputPage) && inputPage >= 1 && inputPage <= maxPage) {
            goToPage({ currentTarget: { getAttribute: () => inputPage.toString() } } as any);
            setIsInputVisible(false);
        } else {
            alert("Invalid page number.");
        }
    };

    return (
        <div ref={containerRef} className="flex justify-end items-center gap-2 mt-4">
            <button
                className={buttonStyle(page - 1)}
                onClick={goToPage}
                data-page={page - 1}
                disabled={page === 1}
            >
                <ChevronLeft size={20} />
            </button>
            <button
                className={buttonStyle(1)}
                onClick={goToPage}
                data-page={1}
            >
                1
            </button>
            <button
                className={buttonStyle(page === maxPage || page === maxPage - 1 || page === 1 ? 2 : page)}
                onClick={goToPage}
                data-page={page === maxPage || page === maxPage - 1 || page === 1 ? 2 : page}
            >
                {page === maxPage || page === maxPage - 1 || page === 1 ? 2 : page}
            </button>
            <button
                className={buttonStyle(0)}
                onClick={() => setIsInputVisible(true)}
            >
                {isInputVisible ? (
                    <form onSubmit={handleFormSubmit} className="flex items-center space-x-2">
                        <input
                            type="number"
                            min="1"
                            max={maxPage}
                            onChange={handleInputChange}
                            className={buttonStyle(0)}
                            autoFocus
                        />
                    </form>
                ) : "..."}
            </button>
            <button
                className={buttonStyle(maxPage - 1)}
                onClick={goToPage}
                data-page={maxPage - 1}
            >
                {maxPage - 1}
            </button>
            <button
                className={buttonStyle(maxPage)}
                onClick={goToPage}
                data-page={maxPage}
            >
                {maxPage}
            </button>
            <button
                className={buttonStyle(page + 1)}
                onClick={goToPage}
                data-page={page + 1}
                disabled={page === maxPage}
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
}

export default Pagination;
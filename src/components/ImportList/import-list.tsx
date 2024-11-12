"use client";

import { IImports } from "@/types/imports";
import ImportsCard from "../ImportsCard/imports-card";
import { useEffect } from "react";
import { useImport } from "@/store/use-import";

export interface ImportListProps {
    importList: IImports[];
}

function ImportList({ importList }: ImportListProps) {
    const { imports, setImports } = useImport();

    useEffect(() => {
        setImports(importList);
    }, [importList]);

    return (
        <div className="flex flex-wrap md:justify-between justify-center gap-6">
            {imports?.map((e) => (
                <ImportsCard key={e.name} {...e} />
            ))}
        </div>
    );
}

export default ImportList;
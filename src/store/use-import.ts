import { IImports } from "@/types/imports";
import { create } from "zustand";

interface ImportStore {
    imports: IImports[];
    setImports: (imports: IImports[]) => void;
    addImport: (imp: IImports) => void;
}

export const useImport = create<ImportStore>((set) => ({
    imports: [],
    setImports: (imports) => set({ imports }),
    addImport: (imp) => set(({ imports }) => ({ imports: [...imports, imp] }))
}));
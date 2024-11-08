import { IResearch } from "@/types/research";
import { ITopic } from "@/types/topic";
import { create } from "zustand";

export type ModalType = "create-base" | "database" | "topic" | "create-question";

export type AdditionalData = {
    topic?: Partial<ITopic>;
    survey?: string;
    research?: IResearch;
    file?: Buffer;
    base?: string;
}

interface ModalStore {
    additionalData: AdditionalData | null;

    type: ModalType | null;
    isOpen: boolean;
    onOpen: (type: ModalType, additionalData?: Partial<AdditionalData>) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    additionalData: null,

    type: null,
    isOpen: false,
    onOpen: (type, additionalData) => set({ type, isOpen: true, additionalData }),
    onClose: () => set({ type: null, isOpen: false }),
}));
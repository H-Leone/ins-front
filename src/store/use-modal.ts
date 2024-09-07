import { IResearchTopic } from "@/types/research-topic";
import { create } from "zustand";

export type ModalType = "create-base" | "database" | "topic";

export type AdditionalData = {
    topic?: Partial<IResearchTopic>;
}

interface ModalStore {
    additionalData: AdditionalData | null;

    type: ModalType | null;
    isOpen: boolean;
    onOpen: (type: ModalType, extraData?: Partial<AdditionalData>) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    additionalData: null,

    type: null,
    isOpen: false,
    onOpen: (type, additionalData) => set({ type, isOpen: true, additionalData }),
    onClose: () => set({ type: null, isOpen: false }),
}));
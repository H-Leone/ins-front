import { create } from "zustand";

export type ModalType = "create-base" | "database";

type ModalStoreData = {
    onConfirm: Function | null;
    groupId: string | null;
    tournamentId: string | null;
}

interface ModalStore {
    type: ModalType | null;
    isOpen: boolean;
    onOpen: (type: ModalType, extraData?: Partial<ModalStoreData>) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
    type: null,
    isOpen: false,
    onOpen: (type) => set({ type, isOpen: true }),
    onClose: () => set({ type: null, isOpen: false }),
}));
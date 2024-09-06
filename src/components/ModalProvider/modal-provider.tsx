"use client";

import { useModal } from "@/store/use-modal";
import CreateBaseModal from "../CreateBaseModal/create-base-modal";
import DatabaseModal from "../DatabaseModal/database-modal";

function ModalProvider() {
    const { isOpen } = useModal();

    if(!isOpen) return null;

    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/[.35] z-50 flex justify-center items-center"
        >
            <CreateBaseModal />
            <DatabaseModal />
        </div>
    );
}

export default ModalProvider;
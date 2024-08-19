"use client";

import { useModal } from "@/store/use-modal";

function ModalProvider() {
    const { isOpen } = useModal();

    if(!isOpen) return null;

    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/[.35] z-50 flex justify-center items-center"
        >
            
        </div>
    );
}

export default ModalProvider;
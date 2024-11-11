"use client";

import { useModal } from "@/store/use-modal";
import CreateBaseModal from "../CreateBaseModal/create-base-modal";
import DatabaseModal from "../DatabaseModal/database-modal";
import TopicModal from "../TopicModal/topic-modal";
import CreateQuestionModal from "../CreateQuestionModal/create-question-modal";

function ModalProvider() {
    const { isOpen } = useModal();

    if(!isOpen) return null;

    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black/[.35] z-50 flex justify-center items-center"
        >
            <CreateBaseModal />
            <DatabaseModal />
            <TopicModal />
            <CreateQuestionModal />
        </div>
    );
}

export default ModalProvider;
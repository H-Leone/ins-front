"use client";

import { useModal } from "@/store/use-modal";
import { useEffect, useRef, useState } from "react";
import InsightfyButton from "../InsightfyButton/insightfy-button";
import { createQuestion } from "@/services/create-question";
import { useSurvey } from "@/store/use-survey";

function CreateQuestionModal() {
    const modalRef = useRef<HTMLDivElement>(null);
    const { additionalData, type, onClose } = useModal();
    const { survey, setSurvey } = useSurvey();
    const options = [
        { option: "1", name: "Opções" },
        { option: "2", name: "Resposta aberta" },
        { option: "4", name: "NPS" }
    ];
    const [selectedOption, setOption] = useState("");

    const handleSelectOption = (option: string) => () => {
        setOption(option);
    }

    const handleCreateQuestion = async () => {
        if (additionalData?.research?.id) {
            const updatedSurvey = await createQuestion(additionalData?.research?.id, selectedOption);

            if(updatedSurvey) {
                setSurvey(updatedSurvey);
                onClose();
            }
        };
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [onClose]);

    if (type !== "create-question") return null;

    return (
        <div ref={modalRef} className="w-[450px] rounded-md bg-white flex flex-col gap-6 select-none p-8 pt-6">
            <p className="text-center font-semibold text-lg">Selecione o tipo de pergunta que sera inserida</p>

            <ul className="flex flex-col gap-4">
                {options
                    .map(option => (
                        <li onClick={handleSelectOption(option.option)} className="flex items-center gap-2" key={option.option}>
                            <input checked={option.option === selectedOption} type="radio" />
                            <p>{option.name}</p>
                        </li>
                    ))}
            </ul>

            <InsightfyButton 
                text="Criar"
                type="button"
                fontSize="18px"
                variant="contained"
                click={handleCreateQuestion}
                disabled={false}
            />
        </div>
    );
}

export default CreateQuestionModal;
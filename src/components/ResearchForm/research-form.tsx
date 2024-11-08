"use client";

import { IForm } from "@/types/research";
import ResearchRating from "../ResearchRating/research-rating";
import { useState } from "react";
import { Check, Trash } from "lucide-react";
import ActionCard from "../ActionCard/action-card";

interface ResearchFormProps {
    isActive: boolean;
    deleteQuestion: () => void;
    changeForm: (newDescription: string) => void;
    updateQuestion: () => void;
}

function ResearchForm({ surveyType, description, responses, deleteQuestion, changeForm, updateQuestion, isActive }: IForm & ResearchFormProps) {
    const [selectedResponse, setResponse] = useState<string | number | string[]>("");

    const actions = [
        { name: "Salvar alterações", icon: <Check size={20} />, callback: () => updateQuestion() },
        { name: "Deletar", icon: <Trash size={20} />, callback: () => deleteQuestion() },
    ];

    const handleSelectResponse = (response: string) => () => {
        setResponse(response);
    };

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        changeForm(e.target.value);
    };    

    const renderFormDescription = () => {
        if(isActive) {
            return (
                <p>{description}</p>
            );
        } else {
            return (
                <textarea className="text-sm font-medium text-insightfy-dark-gray outline-none border border-black/10 min-h-24 max-h-24 rounded-md resize-none p-4" value={description} onChange={handleDescriptionChange} />
            );
        }
    }

    return (
        <section className="w-full flex flex-col gap-8 px-8 py-10 border-2 border-insightfy-light-gray rounded-lg relative">
            {surveyType === "1" && (
                <>
                    {renderFormDescription()}
                    
                    <ResearchRating responses={responses as number[]} />
                </>
            )}

            {surveyType === "2" && (
                <>
                    {renderFormDescription()}

                    <ul className="flex flex-col gap-4 cursor-pointer">
                        {responses.map(response => (
                            <li key={response} onClick={handleSelectResponse(response.toString())} className="flex items-center gap-2">
                                <input checked={response === selectedResponse} type="radio" readOnly />
                                <p>{response}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            {surveyType === "4" && (
                <>
                    {renderFormDescription()}
                    
                    <textarea className="resize-none w-full h-44 bg-[#F8FAFC] outline-none text-sm p-4 rounded-lg" placeholder="Hint text..." disabled />
                </>
            )}

            {!isActive && (
                <div className="flex items-center absolute -top-5 right-4 bg-white border border-insightfy-border rounded-md">
                    {actions.map((action, index) => (
                        <ActionCard 
                            key={action.name} 
                            index={index}
                            actions={actions.length}
                            {...action} 
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default ResearchForm;
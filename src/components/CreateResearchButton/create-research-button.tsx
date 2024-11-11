"use client";

import { PlusIcon } from "lucide-react";
import InsightfyButton from "../InsightfyButton/insightfy-button";
import { useRouter } from "next/navigation";
import { createResearch } from "@/services/create-research";

function CreateResearchButton() {
    const router = useRouter();

    const handleClick = async () => {
        const research = await createResearch({
            title: "New Survey",
            scheduledDate: new Date().toISOString()
        });

        if(research.id) {
            router.push(`/formularios/config/${research.id}`);
        }
    }

    return (
        <InsightfyButton
            width="145"
            disabled={false}
            type="button"
            text="Nova Pesquisa"
            variant="contained"
            click={handleClick}
            icon={<PlusIcon className="text-white w-6 h-6" size={15} />}
        />
    );
}

export default CreateResearchButton;
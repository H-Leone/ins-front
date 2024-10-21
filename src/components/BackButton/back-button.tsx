"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function BackButton() {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    }

    return (
        <span className="w-fit flex items-center gap-2 p-8 cursor-pointer" onClick={handleClick}>
            <ArrowLeft size={20} />
            <p>Voltar</p>
        </span>
    );
}

export default BackButton;
"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface BackButtonProps {
    path?: string;
}

function BackButton({ path }: BackButtonProps) {
    const router = useRouter();

    const handleClick = () => {
        if(path) {
            router.push(path);
        } else {
            router.back();
        }
    }

    return (
        <span className="w-fit flex items-center gap-2 p-8 cursor-pointer" onClick={handleClick}>
            <ArrowLeft size={20} />
            <p>Voltar</p>
        </span>
    );
}

export default BackButton;
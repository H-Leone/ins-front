"use client";

import { Circle, CircleDot } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface CommunicationMethodsProps {
    change: (method: string) => void;
    email: boolean;
    whatsapp: boolean;
}

function CommunicationMethods({ change, email, whatsapp }: CommunicationMethodsProps) {
    const communication = { 
        "WhatsApp": whatsapp, 
        "Email": email
    };

    const handleSelect = (key: keyof typeof communication) => () => {
        const k = key.toLowerCase();
        
        change(k);
    }    

    return (
        <div className="flex flex-col gap-3">
            {Object.keys(communication).map(el => (
                <div 
                    onClick={handleSelect(el as keyof typeof communication)} 
                    className={`flex items-center gap-2 cursor-pointer ${communication[el as keyof typeof communication] && "font-bold"}`} 
                    key={el}
                >
                    {communication[el as keyof typeof communication] ? <CircleDot size={17.5} /> : <Circle size={17.5} />}
                    <p>{el}</p>
                </div>
            ))}
        </div>
    );
}

export default CommunicationMethods;
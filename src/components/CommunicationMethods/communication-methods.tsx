"use client";

import { Circle, CircleDot } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function CommunicationMethods() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const whatsapp = searchParams.get("whatsapp");
    const email = searchParams.get("email");
    const communication = { 
        "WhatsApp": whatsapp, 
        "Email": email
    };

    const handleSelect = (key: keyof typeof communication) => () => {
        const k = key.toLowerCase();
        const params = new URLSearchParams(searchParams);
        const value = communication[key];
    
        if (value) {
            params.delete(k);
        } else {
            params.set(k, "true");
        }
    
        replace(`${pathname}?${params.toString()}`);
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
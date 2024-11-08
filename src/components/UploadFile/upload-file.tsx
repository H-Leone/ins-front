"use client";

import { useModal } from "@/store/use-modal";
import { CloudUpload } from "lucide-react";
import { ChangeEventHandler, useRef } from "react";

function UploadFile() {
    const { onOpen } = useModal();
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = (event.target.files ?? [])[0] as unknown as Buffer;
        
        if (file) {
            onOpen("create-base", { file });
        }
    };

    return (
        <div onClick={() => fileInputRef.current?.click()} className="flex justify-between items-center cursor-pointer">
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                accept=".csv"
            />
            <div className="border-dashed border-2 w-full h-56 border-insightfy-blue flex justify-center items-center flex-col">
                <CloudUpload className="text-insightfy-gray" size={80} />

                <h2 className="text-[24px] text-insightfy-blue font-extrabold">
                    Importar CSV
                </h2>

                <p className="text-[20px] text-insightfy-text">
                    Arraste aqui ou clique para upload
                </p>
            </div>
        </div>
    );
}

export default UploadFile;

"use client";

import { createBase } from "@/services/create-base";
import { useImport } from "@/store/use-import";
import { useModal } from "@/store/use-modal";
import { ChangeEventHandler, useState } from "react";

function CreateBaseModal() {
    const [name, setName] = useState("");
    const { addImport } = useImport();
    const { type, onClose, additionalData } = useModal();

    const handleClose = () => {
        onClose();
    }

    const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    }
    
    const handleCreateBase = async () => {
        if(name && additionalData?.file) {
            const base = await createBase(additionalData.file, name);

            if(base) {
                addImport(base);
                onClose();
            }
        }
    }

    if(type !== "create-base") return null;

    return (
        <div className="w-[420px] h-80 rounded-md bg-white flex flex-col justify-around items-center gap-6 px-12 py-8">
            <p className="text-3xl text-insightfy-blue font-semibold">Crie uma Base</p>

            <div className="flex flex-col gap-2">
                <input value={name} onChange={handleChangeName} placeholder="Nome..." className="w-80 h-14 p-4 outline-none border-2 border-insightfy-gray rounded-md text-lg" type="text" />
                {/* @ts-ignore */}
                <p className="text-insightfy-gray text-[15px] font-medium">{additionalData?.file["name"]} {additionalData?.file["size"]}</p>
            </div>

            <div className="w-full h-12 flex gap-6 text-white font-semibold text-xl">
                <button onClick={handleCreateBase} className="hover:brightness-125 duration-200 w-1/2 h-full bg-insightfy-gradient rounded-md">Criar</button>
                <button className="hover:brightness-125 duration-200 w-1/2 h-full bg-insightfy-border rounded-md" onClick={handleClose}>Cancelar</button>
            </div>
        </div>
    );
}

export default CreateBaseModal;
"use client";

import { useModal } from "@/store/use-modal";
import { CloudUpload } from "lucide-react";

function UploadFile() {
    const { onOpen } = useModal();


    const handleOpenCreateBaseModal = () => {
        onOpen("create-base");
    }

    return (
        <div onClick={handleOpenCreateBaseModal} className="flex justify-between items-center cursor-pointer">
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
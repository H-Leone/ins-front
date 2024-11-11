"use client";

import { useModal } from "@/store/use-modal";
import { IImports } from "@/types/imports";
import { Database } from "lucide-react";

function ImportsCard({ id, name, size }: IImports) {
  const { onOpen } = useModal();

  const handleOpenDatabaseModal = () => {
    onOpen("database", { base: id });
  }

  return (
    <div onClick={handleOpenDatabaseModal} className="flex items-center px-4 w-96 h-14 gap-2 rounded-md border-insightfy-border border cursor-pointer hover:bg-insightfy-gray/20 duration-300">
      <Database size={17.5} />
      <div className="w-full flex justify-between items-center">
        <h2 className="text font-medium">{name}</h2>
        <p className="text-sm text-insightfy-gray font-medium">{size}</p>
      </div>
    </div>
  );
}

export default ImportsCard;

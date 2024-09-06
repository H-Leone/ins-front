"use client";

import { useModal } from "@/store/use-modal";
import { Database } from "lucide-react";

interface Props {
  name: string;
  size: string;
}

function ImportsCard({ name, size }: Props) {
  const { onOpen } = useModal();

  const handleOpenDatabaseModal = () => {
    onOpen("database");
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

"use client";

import { createTopic } from "@/services/create-topic";
import { useModal } from "@/store/use-modal";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";

function TopicModal() {
  const { type, additionalData, onClose } = useModal();
  const [name, setName] = useState(additionalData?.topic?.name);
  const [description, setDescription] = useState(
    additionalData?.topic?.description
  );
  const modalRef = useRef<HTMLDivElement>(null);
  const modalType = additionalData?.topic ? "edit" : "create";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

    const handleSubmit = async () => {
        if (modalType === "create") {
            // const response = await createTopic({
            //     name,
            //     description,
            //     survey: additionalData?.survey,
            //     createdAt: Date.now().toString(),
            // });
        } else {

        }
    
        // onClose();
    }    

  const handleChangeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setName(e.target.value);
  };

  const handleChangeDescription: ChangeEventHandler<HTMLTextAreaElement> = (
    e
  ) => {
    setDescription(e.target.value);
  };

  const inputStyle = `w-11/12 p-3 outline-none border border-insightfy-gray rounded-md`;

  if (type !== "topic") return null;

  return (
    <div
      ref={modalRef}
      className="w-96 rounded-md bg-white flex flex-col justify-between items-center gap-6 select-none p-6"
    >
      <p className="text-insightfy-blue text-3xl font-bold">
        {modalType === "create" ? "Crie um" : "Editar"} Tópico
      </p>
      <input
        onChange={handleChangeName}
        value={name}
        className={inputStyle}
        type="text"
        placeholder="Nome..."
      />
      <textarea
        onChange={handleChangeDescription}
        value={description}
        className={inputStyle + " h-28 resize-none"}
        placeholder="Escreva aqui uma decrição sobre o topico"
      />

      <div className="w-11/12 flex justify-between gap-4 text-white">
        <button
          onClick={handleSubmit}
          className="bg-insightfy-blue text-lg h-10 w-40 rounded"
        >
          Criar
        </button>
        <button
          onClick={onClose}
          className="bg-insightfy-dark-gray/50 text-lg h-10 w-40 rounded"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default TopicModal;

"use client";

import { getCostumerBase } from "@/services/get-costumers-base";
import { useModal } from "@/store/use-modal";
import { ICostumer } from "@/types/costumer";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Loading from "../../../public/loading.gif";

function DatabaseModal() {
  const [isLoading, setLoading] = useState(true);
  const [costumers, setCostumers] = useState<ICostumer[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);
  const { type, onClose, additionalData } = useModal();

  const handleGetUsers = async () => {
    if (additionalData?.base) {
      await getCostumerBase(additionalData.base).then((data) => {
        setCostumers(data);
        setLoading(false);
      });
    }
  };

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

  useEffect(() => {
    handleGetUsers();
  }, [type]);

  if (type !== "database") return null;

  return (
    <div
      ref={modalRef}
      className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl min-h-[300px] max-h-[80vh] overflow-y-auto rounded-md bg-white flex flex-col justify-around items-center gap-4 p-4 sm:p-8"
    >
      {!!costumers.length ? (
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-b-insightfy-gray">
              <th className="py-2 sm:py-4 text-xs sm:text-base">Nome</th>
              <th className="py-2 sm:py-4 text-xs sm:text-base">Sobrenome</th>
              <th className="py-2 sm:py-4 text-xs sm:text-base">E-mail</th>
              <th className="py-2 sm:py-4 text-xs sm:text-base">Número</th>
            </tr>
          </thead>
          <tbody>
            {costumers.map((row) => (
              <tr className="border-b border-b-insightfy-gray" key={row.id}>
                <td className="py-2 sm:py-4 text-xs sm:text-base">{row.name}</td>
                <td className="py-2 sm:py-4 text-xs sm:text-base">{row.surname}</td>
                <td className="py-2 sm:py-4 text-xs sm:text-base">{row.email}</td>
                <td className="py-2 sm:py-4 text-xs sm:text-base">{row.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : !isLoading ? (
        <p className="text-center text-xs sm:text-base">Nenhum usuário cadastrado!</p>
      ) : (
        <Image src={Loading.src} alt="Loading GIF" width={50} height={50} />
      )}
    </div>

  )
}

export default DatabaseModal;

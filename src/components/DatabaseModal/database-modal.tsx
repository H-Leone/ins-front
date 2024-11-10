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
      className="w-2/3 min-h-[500px] max-h-[500px] overflow-y-scroll rounded-md bg-white flex flex-col justify-around items-center gap-6 select-none p-16 pt-6"
    >
      {!!costumers.length ? (
        <div className="w-full max-h-[400px] overflow-y-auto">
          <table className="w-full text-left max-h-[500px]">
            <thead className="">
              <tr className="border-b border-b-insightfy-gray">
                <th className="py-4 ">Nome</th>
                <th className="py-4 ">Sobrenome</th>
                <th className="py-4 ">E-mail</th>
                <th className="py-4 ">Número</th>
              </tr>
            </thead>
            <tbody className="">
              {costumers.map((row) => (
                <tr className="border-b border-b-insightfy-gray" key={row.id}>
                  <td className="py-4 ">{row.name}</td>
                  <td className="py-4 ">{row.surname}</td>
                  <td className="py-4 ">{row.email}</td>
                  <td className="py-4 ">{row.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : !isLoading ? (
        <p>Nenhum usuário cadastrado!</p>
      ) : (
        <Image src={Loading.src} alt="Loading GIF" width={100} height={100} />
      )}
    </div>
  );
}

export default DatabaseModal;

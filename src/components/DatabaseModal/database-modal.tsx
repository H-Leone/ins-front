"use client";

import { useModal } from "@/store/use-modal";
import { useEffect, useRef } from "react";

function DatabaseModal() {
    const modalRef = useRef<HTMLDivElement>(null);
    const { type, onClose } = useModal();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [onClose]);

    if (type !== "database") return null;

    return (
        <div ref={modalRef} className="w-2/3 min-h-[480px] max-h-[500px] overflow-y-scroll rounded-md bg-white flex flex-col justify-around items-center gap-6 select-none p-16 pt-6">
            <table className="w-full text-left">
                <thead>
                    <tr className="border-b border-b-insightfy-gray">
                        <th className="py-4">Nome</th>
                        <th className="py-4">Sobrenome</th>
                        <th className="py-4">E-mail</th>
                        <th className="py-4">Número</th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3, 4, 5, 6, 7].map((row) => (
                        <tr className="border-b border-b-insightfy-gray" key={row}>
                            <td className="py-4">Guy</td>
                            <td className="py-4">Hawkins</td>
                            <td className="py-4">guy.vei@gmail.com</td>
                            <td className="py-4">11 90000-0000</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DatabaseModal;
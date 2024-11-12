"use client";

import { useState, useEffect, useRef } from "react";
import UserImage from "../../../public/user-mock-image.svg";
import Image from "next/image";
import { LogOut } from "lucide-react";
import { clearToken } from "@/actions";
import { useRouter } from "next/navigation";

function UserIcon() {
    const router = useRouter();
    const [isOpen, setOpen] = useState(false);
    const userIconRef = useRef<HTMLDivElement | null>(null);

    const handleOpen = () => {
        setOpen((prev) => !prev);
    };

    const handleLogout = async () => {
        await clearToken();
        router.push("/");
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (userIconRef.current && !userIconRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={userIconRef}>
            <Image
                onClick={handleOpen}
                src={UserImage.src}
                alt="User Icon"
                width={50}
                height={50}
                priority
            />

            {isOpen && (
                <div
                    onClick={handleLogout}
                    className="absolute left-1/2 -translate-x-1/2 -bottom-12 flex items-center gap-2 text-red-500 border border-insightfy-border px-4 py-2 bg-white rounded-md"
                >
                    <LogOut size={20} />
                    <p className="font-semibold">Sair</p>
                </div>
            )}
        </div>
    );
}

export default UserIcon;
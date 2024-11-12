"use client";

import { useEffect, useState } from "react";
import { IResearch } from "@/types/research";
import { IUser } from "@/types/user";
import ProjectCard from "../ProjectCard/project-card";
import { Database, Home, LucideBarChart2, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface HomeSidebarProps {
    user: IUser;
    researches: IResearch[];
    isMenuOpen: boolean;
}

function HomeSidebar({ user, researches, isMenuOpen: initialMenuState }: HomeSidebarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(initialMenuState);
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const tabs = [
        { name: "Bem-Vindo", path: "/home", icon: <Home size={21} /> },
        { name: "Bases", path: "/importacoes", icon: <Database size={21} /> },
        { name: "Pesquisas", path: "/formularios", icon: <LucideBarChart2 size={21} /> },
    ];

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const params = new URLSearchParams(searchParams);

            if (width > 1000) {
                params.set("isLarge", "true");
                setIsLargeScreen(true);
            } else {
                params.delete("isLarge");
                setIsLargeScreen(false);
            }

            replace(`${pathname}?${params.toString()}`);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isLargeScreen) {
            setIsMenuOpen(true);
        }
    }, [isLargeScreen]);

    const handleToggleOpen = () => {
        const params = new URLSearchParams(searchParams);

        if (!isMenuOpen) {
            params.set("isMenuOpen", "true");
        } else {
            params.delete("isMenuOpen");
        }

        setIsMenuOpen((prev) => !prev);
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <>
            {!isMenuOpen && !isLargeScreen && (
                <Menu onClick={handleToggleOpen} size={25} className="m-8" />
            )}
            <div
                className={`fixed w-full h-full z-40 transition-opacity duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-100 bg-black/25 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                <aside
                    className={`w-[300px] min-h-screen max-h-screen fixed overflow-scroll flex flex-col gap-6 p-8 shadow-xl scroll-hidden pb-[170px] z-50 bg-white ${
                        isMenuOpen ? "animate-slideIn" : "animate-slideOut"
                    }`}
                >
                    <section className="flex items-center gap-4">
                        <img width={40} height={40} src={user.company.logo} alt="" />
                        <div>
                            <p className="text-md font-semibold">{user.company.name}</p>
                            <p className="text-sm text-insightfy-dark-gray">Seus Fluxos</p>
                        </div>
                    </section>
                    <div className="flex flex-col gap-2">
                        {tabs.map(({ name, path, icon }, index) => (
                            <Link key={index} href={path}>
                                <span
                                    className={`hover:bg-insightfy-light-gray/75 flex items-center gap-3 px-4 py-3 rounded-lg duration-200 ${
                                        index === 0 && "text-insightfy-blue bg-insightfy-light-gray"
                                    }`}
                                >
                                    <span className="flex justify-center items-center">{icon}</span>
                                    <p className="text-md font-medium">{name}</p>
                                </span>
                            </Link>
                        ))}
                    </div>
                    <p className="font-bold">Pesquisas recentes</p>
                    <div className="flex flex-col items-center gap-6">
                        {researches.map((research) => (
                            <ProjectCard key={research.id} {...research} />
                        ))}
                    </div>
                    {isMenuOpen && !isLargeScreen && (
                        <span onClick={handleToggleOpen} className="absolute top-10 right-8">
                            <X size={20} />
                        </span>
                    )}
                </aside>
            </div>
        </>
    );
}

export default HomeSidebar;
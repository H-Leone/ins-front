"use client";

import { NavItem } from "@/types/nav-item";
import { useRouter } from "next/navigation";
import { useState } from "react";
import NavItemCard from "./nav-item-card";
import { Search } from "lucide-react";
import Logo from "../../public/insightfy-logo.png";

function Navbar() {
    const router = useRouter();
    const [itemOpen, setItemOpen] = useState<number | null>(null);

    const navItems: NavItem[] = [
        {
          name: "Home",
        },
        {
          name: "Produtos",
          subItems: ["Exemplo", "Exemplo"],
        },
        {
          name: "Planos",
          subItems: ["Exemplo", "Exemplo"],
        },
    ];
    const navItems2: NavItem[] = [
        {
            name: "Contato",
        },
        {
            name: "Login",
        },
        {
            name: "Registro",
            gradient: true,
        },
    ];

    const renderNavItemCard = (navItem: NavItem, index: number) => (
        <NavItemCard
          key={navItem.name}
          {...navItem}
          handleClickNavItem={handleClickNavItem}
          handleClickSubItem={handleClickSubItem}
          index={index}
          itemOpen={itemOpen}
        />
    );
    
    const handleClickNavItem = (navItem: NavItem | number) => () => {
        if (typeof navItem === "number") {
            setItemOpen(navItem === itemOpen ? null : navItem);
        } else {
            router.push(`/${navItem.name.toLowerCase()}`);
        }
    };

    const handleClickSubItem = (subItem: string) => () => {
        router.push(`/${subItem.toLowerCase()}`);
    };

    return (
        <nav className="shadow-lg w-full h-[110px] flex justify-between items-center fixed top-0 left-0 px-8">
            <section className="flex items-center gap-8">
            <img width={110} height={60} src={Logo.src} alt="" />
            <nav className="flex gap-4">{navItems.map(renderNavItemCard)}</nav>
            </section>

            <div className="flex items-center gap-6">
            <button>
                <Search size={25} />
            </button>
            <div className="flex gap-6">{navItems2.map(renderNavItemCard)}</div>
            </div>
        </nav>
    );
}

export default Navbar;
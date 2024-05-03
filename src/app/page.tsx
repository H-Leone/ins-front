"use client";

import { NavItem } from "@/types/nav-item";
import Logo from "../../public/insightfy-logo.png";
import { ChevronDown, Search } from "lucide-react";
import LandingImage from "../../public/landing-image.png"
import { useRouter } from "next/navigation";
import { useState } from "react";
import NavItemCard from "@/components/nav-item-card";
import BusinessCarousel from "@/components/business-carousel";

function Home() {
  const router = useRouter();
  const [itemOpen, setItemOpen] = useState<number | null>(null);
  const navItems: NavItem[] = [
    {
      name: "Home",
    },
    {
      name: "Produtos",
      subItems: ["Miguel", "Barba"],
    },
    {
      name: "Planos",
      subItems: ["Miguel", "Barba"],
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
    <div className="pt-[180px]">
      <header className="shadow-lg w-full h-[110px] flex justify-between items-center fixed top-0 left-0 px-8">
        <section className="flex items-center gap-8">
          <img width={110} height={60} src={Logo.src} alt="" />
          <nav className="flex gap-4">{navItems.map(renderNavItemCard)}</nav>
        </section>

        <div className="flex items-center gap-6">
          <Search size={25} />
          <div className="flex gap-6">{navItems2.map(renderNavItemCard)}</div>
        </div>
      </header>

      <div className="flex justify-evenly items-center">
        
        <div className="w-[500px] flex flex-col gap-6">

          <h1 className="text-[35px] font-bold">Lorem ipsum dolor sit amet, consectetur <span className="bg-slate-300">adipscing elit. Sed</span> bibendum purus eget.</h1>

          <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum purus eget nunc luctus tincidunt. Proin dignissim massa sed aliquam iaculis.</p>

          <div className="flex gap-4">
            <button className="bg-insigthfy-gradient px-4 py-2 rounded-md text-white">Começar</button>
            <button className="bg-gray-100 px-4 py-2 rounded-md font-medium">Saber mais</button>
          </div>

        </div>

        <img src={LandingImage.src} alt="" />

      </div>

      <p className="my-8 text-center">Algumas empresas do grupo que utilizam o NPS</p>

      <BusinessCarousel />

    </div>
  );
}

export default Home;

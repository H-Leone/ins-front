import { NavItem } from "@/types/nav-item";
import { ChevronDown } from "lucide-react";

interface Props {
    gradient?: boolean;
    index: number;
    itemOpen: number | null;
    handleClickNavItem: (el: NavItem | number) => () => void;
    handleClickSubItem: (subItem: string) => () => void;
}

function NavItemCard({ gradient, name, subItems, index, itemOpen, handleClickNavItem, handleClickSubItem }: NavItem & Props) {
    return (
        <span
            className={`relative px-3 py-2 rounded ${gradient && "bg-insigthfy-gradient"}`}
        >
            <section
                onClick={handleClickNavItem(subItems ? index : { name, subItems })}
                className="flex justify-around items-center gap-1 cursor-pointer"
            >
                <p className={`w-full select-none text-center font-medium ${gradient && "text-white"}`}>{name}</p>
                {subItems && <ChevronDown size={25} className={`${(subItems && itemOpen === index) && "rotate-180"} duration-200`} />}
            </section>
            <div className="rounded-md">
                {(subItems && itemOpen === index) && (
                <nav className="w-full text-center absolute top-8 left-0 bg-white border border-gray-300 rounded-md select-none">
                    {subItems.map((subItem, index) => (
                    <p key={index} className="cursor-pointer p-2 hover:bg-gray-200" onClick={handleClickSubItem(subItem)}>{subItem}</p>
                    ))}
                </nav>
                )}
            </div>
        </span>
    );
}

export default NavItemCard;
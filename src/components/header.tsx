import { Bell, BellRing, Grid3X3, Sheet, User } from "lucide-react";
import InsightfyLogo from "../../public/insightfy-logo.svg";
import UserImage from "../../public/user-mock-image.svg";
import MenuIcon from "../../public/menu-icon.svg";
import BellIcon from "../../public/bell-icon.svg";
import MenuBar from "../../public/menu-bar.svg";
import { INavItem } from "@/types/nav-item";
import Link from "next/link";
import Image from "next/image";

function Header() {
    const navItems: INavItem[] = [
        { name: "Home" },
    ];

    return (
        <div className="bg-white shadow-lg w-full h-[110px] flex justify-between items-center fixed top-0 left-0 px-8 z-10">
            <section className="flex items-center gap-8">
                <Link href="/home">
                    <Image
                        src={InsightfyLogo.src}
                        alt="Insightfy Logo"
                        width={110}
                        height={60}
                        priority
                    />
                </Link>
                <Link href="/home">
                    <p className="font-medium text-lg">Home</p>
                </Link>
            </section>

            <div className="flex items-center gap-8">

                <div className="flex items-center gap-3">

                    {[<BellRing size={21} />, <Sheet size={21} />].map((icon, index) => (
                        <span key={index} className="cursor-pointer bg-insightfy-light-gray p-3 rounded-lg hover:brightness-90 duration-200">
                            {icon}
                        </span>
                    ))}
                </div>

                <Image
                    src={UserImage.src}
                    alt="User Icon"
                    width={50}
                    height={50}
                    priority
                />

            </div>
        </div>
    );
}

export default Header;
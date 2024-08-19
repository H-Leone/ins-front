import { Bell, Grid3X3, User } from "lucide-react";
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
                <Link href="/">
                    <Image
                        src={InsightfyLogo.src}
                        alt="Insightfy Logo"
                        width={110}
                        height={60}
                        priority
                    />
                </Link>
                <img width={30} height={30} src={MenuBar.src} alt="" />
                <Link href="/home">
                    <p className="text-insightfy-blue font-bold text-lg">Home</p>
                </Link>
            </section>

            <div className="flex items-center gap-6">

                <Image
                    src={BellIcon.src}
                    alt="Bell Icon"
                    width={25}
                    height={25}
                />

                <Image
                    src={UserImage.src}
                    alt="User Icon"
                    width={35}
                    height={35}
                    priority
                />

                <Image
                    src={MenuIcon.src}
                    alt="Menu Icon"
                    width={30}
                    height={30}
                />

            </div>
        </div>
    );
}

export default Header;
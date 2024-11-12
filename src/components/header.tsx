import { Sheet } from "lucide-react";
import InsightfyLogo from "../../public/insightfy-logo.svg";
import { INavItem } from "@/types/nav-item";
import Link from "next/link";
import Image from "next/image";
import UserIcon from "./UserIcon/user-icon";

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
            </section>

            <div className="flex items-center gap-8">

                <div className="flex items-center gap-3">

                    {[
                        // <BellRing size={21} />,
                        // <Sheet size={21} />
                    ].map((icon, index) => (
                        <span key={index} className="cursor-pointer bg-insightfy-light-gray p-3 rounded-lg hover:brightness-90 duration-200">
                            {icon}
                        </span>
                    ))}
                </div>

                <UserIcon />
            </div>
        </div>
    );
}

export default Header;
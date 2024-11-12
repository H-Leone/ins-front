import InsightfyLogo from "../../public/insightfy-logo.svg";
import { INavItem } from "@/types/nav-item";
import Link from "next/link";
import NavItemCard from "./nav-item-card";
import { getUser } from "@/services/get-user";

async function NavBar() {
    const user = await getUser();
    const navItems2: INavItem[] = [
        { name: "Contato" },
        { name: "Login" },
        { name: "Registro", gradient: true },
    ];

    const renderNavItemCard = (item: INavItem) => (
        <NavItemCard
            key={item.name}
            {...item}
        />
    );

    return (
        <div className="bg-white shadow-lg w-full h-[110px] flex justify-between items-center fixed top-0 left-0 px-8 z-10">
            <section className="flex items-center gap-8">
                <Link href="/">
                    <img width={110} height={60} src={InsightfyLogo.src} alt="Insightfy Logo" />
                </Link>
                {/* <nav className="flex gap-4">
                    {navItems.map(renderNavItemCard)}
                </nav> */}
            </section>

            <div className="flex items-center gap-6">
                {/* <button>
                    <Search size={25} />
                </button> */}

                {user ? (
                    <NavItemCard 
                        name="Dashboard"
                        path="home"
                        gradient
                    />
                ) : (
                    <div className="flex gap-6">
                        {navItems2.map(renderNavItemCard)}
                    </div>
                )}
            </div>
        </div>
    );
}

export default NavBar;
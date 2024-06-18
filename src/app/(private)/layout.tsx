import Header from "@/components/header";
import Navbar from "@/components/navbar";

interface HeaderLayoutProps {
    children: React.ReactNode;
}

function HeaderLayout({ children }: HeaderLayoutProps) {
    return (
        <div className="py-[110px]">
            <Header />
            {children}
        </div>
    );
}

export default HeaderLayout;
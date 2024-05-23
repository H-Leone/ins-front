import Navbar from "@/components/navbar";

interface HeaderLayoutProps {
    children: React.ReactNode;
}

function HeaderLayout({ children }: HeaderLayoutProps) {
    return (
        <div className="py-[110px]">
            <Navbar />
            {children}
        </div>
    );
}

export default HeaderLayout;
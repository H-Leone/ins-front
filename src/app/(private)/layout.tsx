import Header from "@/components/header";

interface HeaderLayoutProps {
  children: React.ReactNode;
}

function HeaderLayout({ children }: HeaderLayoutProps) {
  return (
    <div>
      <Header />
      <div className="py-[110px]">
        {children}
      </div>
    </div>
  );
}

export default HeaderLayout;

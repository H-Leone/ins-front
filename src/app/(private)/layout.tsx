import Header from "@/components/header";
import { getCostumer } from "@/services/get-costumer";

interface HeaderLayoutProps {
  children: React.ReactNode;
}

async function HeaderLayout({ children }: HeaderLayoutProps) {
  const costumer = await getCostumer("665ef931447e8378bd0f5cc1");

  return (
    <>
    
      <Header />

      <div className="mt-[110px]">
        {children}
      </div>

    </>
  );
}

export default HeaderLayout;

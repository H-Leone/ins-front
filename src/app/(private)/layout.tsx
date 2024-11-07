import Header from "@/components/header";
import { getCostumer } from "@/services/get-costumer";

interface HeaderLayoutProps {
  children: React.ReactNode;
}

async function HeaderLayout({ children }: HeaderLayoutProps) {
  const costumer = await getCostumer("672bb4a130ceee79970207da");

  return (
    <>
      <Header />

      <div className="mt-[110px]">{children}</div>
    </>
  );
}

export default HeaderLayout;

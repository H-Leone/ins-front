import Header from "@/components/header";
import { getUser } from "@/services/get-user";
import { redirect } from "next/navigation";

interface HeaderLayoutProps {
  children: React.ReactNode;
}

async function HeaderLayout({ children }: HeaderLayoutProps) {
  const user = await getUser();

  if(!user) {
    redirect("/");
  }

  return (
    <>
      <Header />

      <div className="mt-[110px]">{children}</div>
    </>
  );
}

export default HeaderLayout;

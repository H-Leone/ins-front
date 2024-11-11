import BackButton from "@/components/BackButton/back-button";

interface PagesLayoutProps {
  children: React.ReactNode;
}

function PagesLayout({ children }: PagesLayoutProps) {
  return (
    <>
      <BackButton />

      {children}
    </>
  );
}

export default PagesLayout;

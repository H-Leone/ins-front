import DataCard from "@/components/DataCard/data-card";
import ResearchDataCard from "@/components/ResearchDataCard/research-data-card";
import { getRecentResearchs } from "@/services/get-recent-researches";
import { getUser } from "@/services/get-user";
import HomeSidebar from "@/components/HomeSidebar/home-sidebar";

interface HomePageProps {
  searchParams: {
    isMenuOpen: boolean;
    isLarge: boolean;
  }
}

async function HomePage({ searchParams: { isMenuOpen, isLarge } }: HomePageProps) {
  const user = await getUser();
  const recentResearches = await getRecentResearchs();

  return (
    <div className="pt-1">
      <HomeSidebar isMenuOpen={isMenuOpen} user={user} researches={recentResearches} />

      <section className={`flex flex-col gap-10 ${isMenuOpen && "pt-[90px]"} ${isLarge && "pl-[300px]"} pt-10 pb-12`}>
        <section className="m-auto text-center">
          <p className="text-3xl font-bold">RESUMO DAS PESQUISAS</p>

          <p className="font-medium text-insightfy-gray">
            Saiba o que está acontecendo
          </p>
        </section>

        <div className="w-full flex justify-evenly gap-4">
          <DataCard
            name="Seus Fluxos"
            value={recentResearches.length.toString()}
          />
        </div>

        {/* <Balls /> */}

        <p className="ml-12 text-lg font-bold">Pesquisas Ativas</p>

        <div className="w-full flex flex-wrap justify-evenly gap-6 gap-y-12 px-4">
          {recentResearches.map((e, index) => (
            <ResearchDataCard
              key={index}
              name={e.title}
              answers={e.form.map((e) => e.responses.length).length}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;

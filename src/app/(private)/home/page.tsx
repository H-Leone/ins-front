import ProjectCard from "@/components/ProjectCard/project-card";
import PicpayLogo from "../../../../public/picpay-logo.svg";
import DataCard from "@/components/DataCard/data-card";
import Balls from "@/components/Balls/balls";
import ResearchDataCard from "@/components/ResearchDataCard/research-data-card";
import Link from "next/link";
import { Database, LucideBarChart2, Home } from "lucide-react";
import { getRecentResearchs } from "@/services/get-recent-researches";

async function HomePage() {
  const recentResearches = await getRecentResearchs();
  const tabs = [
    { name: "Bem-Vindo", path: "/home", icon: <Home size={21} /> },
    { name: "Bases", path: "/importacoes", icon: <Database size={21} /> },
    {
      name: "Pesquisas",
      path: "/formularios",
      icon: <LucideBarChart2 size={21} />,
    },
    // {
    //   name: "Dashboard",
    //   path: "/dashboard",
    //   icon: <LucideBarChart2 size={21} />,
    // },
  ];

  return (
    <div>
      <aside className="w-[300px] min-h-screen max-h-screen fixed overflow-scroll flex flex-col gap-6 p-8 shadow-xl scroll-hidden pb-[170px]">
        <section className="flex items-center gap-4">
          <img width={40} height={40} src={PicpayLogo.src} alt="" />
          <div>
            <p className="text-md font-semibold">PicPay</p>
            <p className="text-sm text-insightfy-dark-gray">Seus Fluxos</p>
          </div>
        </section>

        <div className="flex flex-col gap-2">
          {tabs.map(({ name, path, icon }, index) => (
            <Link key={index} href={path}>
              <span
                className={`hover:bg-insightfy-light-gray/75 flex items-center gap-3 px-4 py-3 rounded-lg duration-200 ${
                  index === 0 && "text-insightfy-blue bg-insightfy-light-gray"
                }`}
                key={name}
              >
                <span className="flex justify-center items-center">{icon}</span>
                <p className="text-md font-medium">{name}</p>
              </span>
            </Link>
          ))}
        </div>

        <p className="font-bold">Pesquisas recentes</p>

        <div className="flex flex-col items-center gap-6">
          {recentResearches.map((research) => (
            <ProjectCard key={research.id} {...research} />
          ))}
        </div>
      </aside>

      <section className="flex flex-col gap-10 pl-[300px] py-12">
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

        <div className="w-full flex flex-wrap justify-evenly gap-6 px-4">
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

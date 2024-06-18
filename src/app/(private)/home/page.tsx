import ProjectCard from "@/components/ProjectCard/project-card";
import PicpayLogo from "../../../../public/picpay-logo.svg";
import DataCard from "@/components/DataCard/data-card";
import Balls from "@/components/Balls/balls";
import ResearchDataCard from "@/components/ResearchDataCard/research-data-card";

function HomePage() {

    return (
        <div>

            <aside className="w-[300px] max-h-screen overflow-scroll flex flex-col items-center gap-6 py-8 shadow-xl fixed scroll-hidden">

                <img width={160} height={140} src={PicpayLogo.src} alt="" />

                <section className="text-center">
                    <p className="text-xl font-semibold">Bem-Vindo</p>
                    <p className="text-sm">ao Insightfy</p>
                </section>

                <p className="text-start font-medium">Meus Projetos</p>

                <div className="flex flex-col items-center gap-6">

                    <ProjectCard name="A chance de pegar um shiny está muito baixa?" answers={142} />
                    <ProjectCard name="A chance de pegar um shiny está muito baixa?" answers={142} />
                    <ProjectCard name="A chance de pegar um shiny está muito baixa?" answers={142} />
                    <ProjectCard name="A chance de pegar um shiny está muito baixa?" answers={142} />
                    <ProjectCard name="A chance de pegar um shiny está muito baixa?" answers={142} />

                </div>

            </aside>

            <section className="flex flex-col gap-10 pl-[300px] py-12">

                <section className="m-auto text-center">
                    <p className="text-3xl font-bold">RESUMO DAS PESQUISAS</p>
                    
                    <p className="font-medium">Saiba o que está acontecendo</p>
                </section>

                <div className="w-full flex justify-evenly gap-4">

                    <DataCard name="Seus Fluxos" value="14" />

                    <DataCard name="Convites Enviados" value="43 mil" />

                </div>

                <Balls />

                <p className="ml-12 text-lg font-semibold">Pesquisas Ativas</p>

                <div className="w-full flex flex-wrap justify-evenly gap-6 px-4">

                    <ResearchDataCard />
                    <ResearchDataCard />
                    <ResearchDataCard />
                    <ResearchDataCard />
                    <ResearchDataCard />

                </div>

            </section>

        </div>
    );
}

export default HomePage;
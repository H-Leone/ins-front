import CommunicationMethods from "@/components/CommunicationMethods/communication-methods";
import InsightfyButton from "@/components/InsightfyButton/insightfy-button";
import { IResearchCardProps } from "@/components/ResearchCard/research-card";
import ResearchRating from "@/components/ResearchRating/research-rating";
import { ResearchStatusEnum } from "@/types/research-status.enum";
import { researchStatusColor } from "@/utils/research-status-color";
import { format } from "date-fns";

function CreateResearchPage() {
  const research: IResearchCardProps = {
    id: 1,
    title: "Pesquisa NPS 01",
    answers: 150,
    startDate: new Date(),
    status: ResearchStatusEnum.active,
  };

  return (
    <div className="flex gap-10">
      <div className="w-[400px] flex flex-col gap-6 px-6">
        <div>
          <p className={`text-lg font-semibold ${researchStatusColor(research.status)}`}>Ativo</p>
          <p className="text-insightfy-dark-gray">desde {format(research.startDate, "dd/mm/yyyy HH:mm")}</p>
        </div>

        <input type="text" className="h-12 border border-insightfy-gray rounded-lg outline-none px-3" />

        <CommunicationMethods />

        <div className="flex gap-4 h-12 px-2 text-white font-semibold">
          <button className="w-full bg-insightfy-blue rounded-lg">Salvar</button>
          <button className="w-full bg-insightfy-dark-red rounded-lg">Desativar</button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 shadow-3xl">

        <section className="w-full flex justify-center flex-col px-8 py-8 rounded-lg border-2 border-insightfy-light-gray">
          <input 
            type="text"
            className="w-full text-3xl border-b-2 px-4 py-3 outline-none font-semibold"
            defaultValue="Pesquisa NPS"
          />
        </section>

        <section className="w-full flex flex-col gap-8 px-8 py-8 border-2 border-insightfy-light-gray rounded-lg">
          <p className="text-sm font-medium text-insightfy-dark-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>

          <textarea className="resize-none w-full h-44 bg-gray-500 outline-none text-sm p-4 rounded-lg" placeholder="Hint text...">

          </textarea>

        </section>

        
        <section className="w-full flex flex-col gap-8 px-8 py-8 border-2 border-insightfy-light-gray rounded-lg">
          <p className="text-sm text-center font-medium text-insightfy-dark-gray">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

          <ResearchRating />

        </section>

        <div className="flex" style={{ justifyContent: "right" }}>
          <InsightfyButton
            type="button"
            disabled={false}
            text="Nova Pergunta"
            variant="contained"
            width="170px"
          />
        </div>

      </div>
    </div>
  );
}

export default CreateResearchPage;

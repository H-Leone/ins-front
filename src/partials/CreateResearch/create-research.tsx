import CommunicationMethods from "@/components/CommunicationMethods/communication-methods";
import InsightfyButton from "@/components/InsightfyButton/insightfy-button";
import ResearchForm from "@/components/ResearchForm/research-form";
import { getSurvey } from "@/services/get-survey";
import { researchStatusColor } from "@/utils/research-status-color";
import { format } from "date-fns";

interface CreateResearchPageProps {
  researchId: string;
}

async function CreateResearchPage({ researchId }: CreateResearchPageProps) {
  const research = await getSurvey(researchId);

  return (
    <div className="flex gap-10">
      <div className="w-[400px] flex flex-col gap-6 px-6">
        <div>
          <p
            className={`text-lg font-semibold ${researchStatusColor(
              research.status
            )}`}
          >
            Ativo
          </p>
          <p className="text-insightfy-dark-gray">
            desde {format(research.scheduledDate, "dd/mm/yyyy HH:mm")}
          </p>
        </div>

        <input
          type="text"
          className="h-12 border border-insightfy-gray rounded-lg outline-none px-3"
        />

        <CommunicationMethods />

        <div className="flex gap-4 h-12 px-2 text-white font-semibold">
          <button className="w-full bg-insightfy-blue rounded-lg">
            Salvar
          </button>
          <button
            className="w-full rounded-lg"
            style={{ backgroundColor: "#AE0101" }}
          >
            Desativar
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 shadow-3xl">
        <section className="w-full flex justify-center flex-col px-8 py-8 rounded-lg border-2 border-insightfy-light-gray">
          <input
            type="text"
            className="w-full text-3xl border-b-2 px-4 py-3 outline-none font-semibold"
            defaultValue={research.title}
          />
        </section>

        {research.form.map((f, index) => (
          <ResearchForm {...f} key={index} />
        ))}

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

import InsightfyTabs from "@/components/InsightfyTabs/insightfy-tabs";
import ResearchAnalytics from "@/components/ResearchAnalytics/research-analytics";
import CreateResearchPage from "@/partials/CreateResearch/create-research";
import ResearchAnswers from "@/partials/ResearchAnswers/research-answers";
import { getBases } from "@/services/get-bases";
import { getSurvey } from "@/services/get-survey";
import { IResearch } from "@/types/research";
import { ResearchStatusEnum } from "@/types/research-status.enum";
import { redirect } from "next/navigation";

interface CreateFormPageProps {
  params: {
    research: string;
  };
  searchParams: {
    tab: string;
    search: string;
    pagination: string;
    topic: string;
  };
}

async function CreateFormPage({ params: { research }, searchParams: { tab, search, pagination, topic } }: CreateFormPageProps) {
  const pesquisa: IResearch = await getSurvey(research) ?? {
    title: "",
    app: false,
    email: false,
    sms: false,
    whatsapp: false,
    company: "",
    status: ResearchStatusEnum.DISABLED,
    scheduledDate: new Date().toISOString(),
    form: [],
  };
  const bases = await getBases();
  const tabs = [
    { content: <CreateResearchPage bases={bases} research={pesquisa} />, name: "Criação de formulário", path: "criacao" },
    { content: <ResearchAnswers search={search} page={Number(pagination) || 1} research={research} />, name: "Respostas gerais", path: "respostas"},
    { content: <ResearchAnalytics researchId={research} search={search} topic={topic} />, name: "Análise de respostas", path: "analise"},
  ];

  if (!tab) {
    redirect(`/formularios/config${research ? `/${research}` : ''}?tab=criacao`);
  }  

  return (
    <div className="m-auto w-3/4 flex-col gap-4 flex pb-6">
      <div className="w-full flex justify-between items-center">
        <InsightfyTabs
          research={research}
          currentTab={tab}
          tabs={tabs}
        />
      </div>
    </div>
  );
}

export default CreateFormPage;

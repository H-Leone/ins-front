import InsightfyTabs from "@/components/InsightfyTabs/insightfy-tabs";
import CreateResearchPage from "@/partials/CreateResearch/create-research";
import ResearchAnswers from "@/partials/ResearchAnswers/research-answers";
import { redirect } from "next/navigation";

interface CreateFormPageProps {
  params: {
    research: string;
  };
  searchParams: {
    tab: string;
  };
}

function CreateFormPage({ params: { research }, searchParams: { tab } }: CreateFormPageProps) {
  const tabs = [
    { content: <CreateResearchPage/>, name: "Criação de formulário", path: "criacao" },
    { content: <ResearchAnswers />, name: "Respostas gerais", path: "respostas"},
    { content: <></>, name: "Análise de respostas", path: "analise"},
  ];

  if(!tab) {
    redirect(`/formularios/${research}?tab=criacao`);
  }

  return (
    <div>
      <div className="px-64 flex-col gap-4 flex py-8">
        <div className="flex justify-between items-center">
          <InsightfyTabs
            research={research}
            currentTab={tab}
            tabs={tabs}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateFormPage;

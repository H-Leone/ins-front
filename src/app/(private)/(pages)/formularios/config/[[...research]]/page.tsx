import InsightfyTabs from "@/components/InsightfyTabs/insightfy-tabs";
import ResearchAnalytics from "@/components/ResearchAnalytics/research-analytics";
import CreateResearchPage from "@/partials/CreateResearch/create-research";
import LearnPrompt from "@/partials/LearnPrompt/learn-prompt";
import ResearchAnswers from "@/partials/ResearchAnswers/research-answers";
import { getBases } from "@/services/get-bases";
import { getSurvey } from "@/services/get-survey";
import { getTopics } from "@/services/get-topics";
import { IResearch } from "@/types/research";
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

async function CreateFormPage({
  params: { research },
  searchParams: { tab, search, pagination, topic },
}: CreateFormPageProps) {
  const pesquisa: IResearch = await getSurvey(research);
  const bases = await getBases();
  const topics = await getTopics(research);
  const tabs = [
    {
      content: <CreateResearchPage bases={bases} research={pesquisa} />,
      name: "Criação",
      path: "criacao",
    },
    {
      content: (
        <ResearchAnswers
          search={search}
          page={Number(pagination) || 1}
          research={research}
        />
      ),
      name: "Respostas",
      path: "respostas",
    },
    {
      content: (
        <ResearchAnalytics
          researchId={research}
          search={search}
          topic={topic}
        />
      ),
      name: "Análise",
      path: "analise",
    },
    {
      content: <LearnPrompt search={search} topics={topics} />,
      name: "Learn prompt",
      path: "prompt"
    }
  ];

  if (!tab) {
    redirect(
      `/formularios/config${research ? `/${research}` : ""}?tab=criacao`
    );
  }

  return (
    <div className="m-auto w-3/4 flex-col gap-4 flex pb-6">
      <div className="w-full flex justify-between items-center">
        <InsightfyTabs research={research} currentTab={tab} tabs={tabs} />
      </div>
    </div>
  );
}

export default CreateFormPage;

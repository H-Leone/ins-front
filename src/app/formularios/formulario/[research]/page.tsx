"use client";

import InsightfyTabs from "@/components/InsightfyTabs/insightfy-tabs";
import Navbar from "@/components/navbar";
import CreateResearchPage from "@/partials/CreateResearch/create-research";
import { useParams } from "next/navigation";

function CreateFormPage() {
  const { research } = useParams() as { research: string };

  return (
    <div>
      <Navbar />
      <div className="px-64 flex-col gap-4 flex py-32">
        <div className="flex justify-between items-center">
          <InsightfyTabs
            tabs={[
              { content: <CreateResearchPage/>, name: "criação de formulário" },
              { content: <></>, name: "respostas gerais" },
              { content: <></>, name: "análise de respostas" },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateFormPage;

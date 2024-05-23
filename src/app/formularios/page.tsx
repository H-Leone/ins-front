"use client";

import InsightfyButton from "@/components/InsightfyButton/insightfy-button";
import ResearchCard, {
  IResearchCardProps,
} from "@/components/ResearchCard/research-card";
import TextInput from "@/components/TextInput/text-input";
import Navbar from "@/components/navbar";
import { PlusIcon } from "lucide-react";
import { useState } from "react";

function FormsPage() {
  const [researchList, setResearchList] = useState<IResearchCardProps[]>([
    {
      title: "Pesquisa NPS 01",
      answers: 150,
      startDate: new Date(),
      status: "active",
    },
    {
      title: "Pesquisa NPS 02",
      answers: 0,
      startDate: new Date(),
      status: "scheduled",
    },
    {
      title: "Pesquisa NPS 03",
      answers: 123,
      startDate: new Date(),
      status: "disabled",
      endDate: new Date(),
    },
    {
      title: "Pesquisa NPS 04",
      answers: 180,
      startDate: new Date(),
      status: "disabled",
      endDate: new Date(),
    },
  ]);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="px-64 flex-col gap-4 flex">
        <div className="flex justify-between items-center">
          <TextInput
            change={() => {}}
            placeholder="Search"
            value=""
            suffixIcon={"search"}
          />
          <InsightfyButton
            click={() => null}
            disabled={false}
            text="Nova Pesquisa"
            variant="outlined"
            icon={<PlusIcon className="text-insightfy-blue w-6 h-6"></PlusIcon>}
          />
        </div>
        {!!researchList.length
          ? researchList.map((e, index) => <ResearchCard key={index} {...e} />)
          : "Nada na lista"}
      </div>
    </div>
  );
}

export default FormsPage;
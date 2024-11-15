import CreateResearchButton from "@/components/CreateResearchButton/create-research-button";
import InsightfyButton from "@/components/InsightfyButton/insightfy-button";
import ResearchCard from "@/components/ResearchCard/research-card";
import SearchBar from "@/components/SearchBar/search-bar";
import StatusFilter from "@/components/StatusFilter/status-filter";
import { getSurveys } from "@/services/get-surveys";
import { ResearchStatusEnum } from "@/types/research-status.enum";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

interface IFormsPageProps {
  searchParams: {
    search: string;
    status: string;
  }
}

async function FormsPage({ searchParams: { search, status } }: IFormsPageProps) {
  const researches = await getSurveys()
    .then(data => data.filter(el => {
      const regex = new RegExp(search || "", "i");
      return regex.test(el.title) && (status ? ResearchStatusEnum[status as keyof typeof ResearchStatusEnum].includes(el.status) : true);
    }));

  return (
    <div className="flex justify-center">
      <div className="lg:w-2/3 w-10/12 flex-col gap-6 flex">

        <SearchBar />

        <div className="flex justify-between items-center">
          <StatusFilter options={[
              { label: "", value: "All" },
              ...Object.entries(ResearchStatusEnum).map(([key, value]) => ({ label: key, value }))
          ]} status={status} />
          <CreateResearchButton />
        </div>

        <div className="mt-4 flex-col gap-4 flex pb-8">
          {!!researches.length
            ? researches.map((e, index) => <ResearchCard key={index} {...e} />)
            : <p className="m-8 text-center">Nada na lista...</p>}
        </div>
      </div>
    </div>
  );
}

export default FormsPage;
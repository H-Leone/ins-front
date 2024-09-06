  import InsightfyButton from "@/components/InsightfyButton/insightfy-button";
  import ResearchCard, {
    IResearchCardProps,
  } from "@/components/ResearchCard/research-card";
  import SearchBar from "@/components/SearchBar/search-bar";
  import StatusFilter from "@/components/StatusFilter/status-filter";
  import { ResearchStatusEnum } from "@/types/research-status.enum";
  import { PlusIcon } from "lucide-react";

  interface IFormsPageProps {
    searchParams: {
      search: string;
      status: string;
    }
  }

  function FormsPage({ searchParams: { search, status } }: IFormsPageProps) {
    const researchList: IResearchCardProps[] = [
      {
        id: 1,
        title: "Pesquisa NPS 01",
        answers: 150,
        startDate: new Date(),
        status: ResearchStatusEnum.active,
      },
      {
        id: 2,
        title: "Pesquisa NPS 02",
        answers: 0,
        startDate: new Date(),
        status: ResearchStatusEnum.scheduled,
      },
      {
        id: 3,
        title: "Pesquisa NPS 03",
        answers: 123,
        startDate: new Date(),
        status: ResearchStatusEnum.disabled,
        endDate: new Date(),
      },
      {
        id: 4,
        title: "Pesquisa NPS 04",
        answers: 180,
        startDate: new Date(),
        status: ResearchStatusEnum.disabled,
        endDate: new Date(),
      },
    ].filter(el => {
      const regex = new RegExp(search || "", "i");
      return regex.test(el.title) && (status ? ResearchStatusEnum[status as keyof typeof ResearchStatusEnum].includes(el.status) : true);
    });    

    return (
      <div className="flex justify-center pt-10">
        <div className="lg:w-2/3 w-10/12 flex-col gap-6 flex">

          <SearchBar />

          <div className="flex justify-between items-center">
            <StatusFilter options={[
                { label: "", value: "All" },
                ...Object.entries(ResearchStatusEnum).map(([key, value]) => ({ label: key, value }))
            ]} status={status} />
            <InsightfyButton
              width="145"
              disabled={false}
              type="button"
              text="Nova Pesquisa"
              variant="contained"
              icon={<PlusIcon className="text-white w-6 h-6" size={15} />}
            />
          </div>

          <div className="mt-8 flex-col gap-6 flex">
            {!!researchList.length
              ? researchList.map((e, index) => <ResearchCard key={index} {...e} />)
              : <p className="m-8 text-center">Nada na lista...</p>}
          </div>
        </div>
      </div>
    );
  }

  export default FormsPage;
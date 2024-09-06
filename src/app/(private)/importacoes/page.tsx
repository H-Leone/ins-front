import ImportsCard from "@/components/ImportsCard/imports-card";
import SearchBar from "@/components/SearchBar/search-bar";
import StatusFilter from "@/components/StatusFilter/status-filter";
import UploadFile from "@/components/UploadFile/upload-file";
import { IImports } from "@/types/imports";

interface IImportsPageProps {
  searchParams: {
    search: string;
    status: string;
  }
}

function ImportsPage({ searchParams: { search, status } }: IImportsPageProps) {
  const imports: IImports[] = [
    {
      name: "Base Colab",
      size: "2Mb",
    },
    {
      name: "Base Colab Nacional",
      size: "1,2Mb",
    },
    {
      name: "Base Parcerias",
      size: "256kb",
    },
    {
      name: "Base Usuários",
      size: "593kb",
    },
    {
      name: "Base Diretoria",
      size: "64kb",
    },
  ].filter(el => {
    const regex = new RegExp(search || "", "i");
    return regex.test(el.name)
  });

  return (
    <div className="flex justify-center pt-10 ">
      <div className="lg:w-[800px] md:w-[500px] w-[400px] flex-col gap-8 flex">


        <UploadFile />

        <div className="w-full flex justify-between items-center">

          <SearchBar width={280} />

          <StatusFilter status={status} options={[{ label: "finished", value: "Finished" }]} />

        </div>

        {!!imports.length && (
          <div className="flex flex-wrap justify-center lg:justify-between gap-6">
            {imports.map((e) => (
              <ImportsCard key={e.name} {...e} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default ImportsPage;

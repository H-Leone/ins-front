import ImportsCard from "@/components/ImportsCard/imports-card";
import SearchBar from "@/components/SearchBar/search-bar";
import StatusFilter from "@/components/StatusFilter/status-filter";
import UploadFile from "@/components/UploadFile/upload-file";
import { getBases } from "@/services/get-bases";
import { IImports } from "@/types/imports";

interface IImportsPageProps {
  searchParams: {
    search: string;
    status: string;
  }
}

async function ImportsPage({ searchParams: { search, status } }: IImportsPageProps) {
  const imports: IImports[] = await getBases()
    .then(bases => bases.filter(el => {
      const regex = new RegExp(search || "", "i");
      return regex.test(el.name)
    }));

  return (
    <div className="flex justify-center">
      <div className="lg:w-[800px] md:w-[500px] w-[400px] flex-col gap-8 flex">


        <UploadFile />

        <div className="w-full flex justify-between items-center">

          <SearchBar width={280} />

          {/* <StatusFilter status={status} options={[{ label: "finished", value: "Finished" }]} /> */}

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

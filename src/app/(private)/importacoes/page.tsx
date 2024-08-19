"use client";
import ImportsCard from "@/components/ImportsCard/imports-card";
import TextInput from "@/components/TextInput/text-input";
import { IImports } from "@/types/imports";
import { CloudUpload } from "lucide-react";
import { useEffect, useState } from "react";

function ImportsPage() {
  const [search, setSearch] = useState<string>("");
  const [imports, setImports] = useState<IImports[]>([
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
  ]);
  const [currentImports, setCurrentImports] = useState<IImports[]>(imports);

  useEffect(() => {
    const data = imports;
    setCurrentImports(data.filter((e) => e.name.includes(search)) ?? []);
  }, [search, imports]);

  return (
    <div className="flex justify-center pt-10 ">
      <div className="lg:w-[700px] md:w-[500px] w-[400px] flex-col gap-8 flex">
        <div className="flex justify-between items-center cursor-pointer">
          <div className="border-dashed border-2 w-full h-[20rem] border-insightfy-blue flex justify-center items-center flex-col">
            <CloudUpload size={100} />
            <h2 className="text-[24px] text-insightfy-blue font-extrabold">
              importar CSV
            </h2>
            <p className="text-[20px] text-insightfy-text">
              arraste aqui ou clique para upload
            </p>
          </div>
        </div>
        <TextInput
          change={setSearch}
          placeholder="Search"
          value={search}
          suffixIcon={"search"}
        />
        {!!currentImports.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
            {currentImports.map((e) => (
              <ImportsCard key={e.name} name={e.name} size={e.size} />
            ))}
          </div>
        ) : search ? (
          <p className="text-center w-full">
            Não existem bases importadas com o nome{" "}
            <span className="font-bold">&quot;{search}&quot;</span>
          </p>
        ) : (
          <p className="text-center w-full">Não existem bases importadas</p>
        )}
      </div>
    </div>
  );
}

export default ImportsPage;

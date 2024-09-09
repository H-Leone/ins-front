"use client";

import Pagination from "@/components/Pagination/pagination";
import SearchBar from "@/components/SearchBar/search-bar";
import StatusFilter from "@/components/StatusFilter/status-filter";

interface IResearchAnswersProps {
    search: string;
    page: number;
}

function ResearchAnswers({ search, page }: IResearchAnswersProps) {
    // TODO: Filtrar dados na tabela

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <StatusFilter options={[{ label: "All", value: "All" }]} />
                <SearchBar width={300} />
            </div>

            <table className="w-full mt-8">
                <thead className="bg-insightfy-blue h-14 rounded-md">
                    <tr className="text-center text-white font-semibold">
                        <td>Nome</td>
                        <td>E-mail</td>
                        <td>Resposta 1</td>
                        <td>Resposta 2</td>
                        <td>Resposta 3</td>
                        <td>Resposta 4</td>
                    </tr>
                </thead>

                <tbody>
                    {[...Array(7).keys()].map((el) => (
                        <tr className="border border-gray-300 text-center font-medium h-14" key={el}>
                            <td>arroi</td>
                            <td>arroi@gmail.com</td>
                            <td>Ariallllllll</td>
                            <td>lorem ipsum dod sfojrngf asdjoznfdvkjsd vxcd</td>
                            <td>3</td>
                            <td>08/11/2006</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination page={page} />
        </div>
    );
}

export default ResearchAnswers;
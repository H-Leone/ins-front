import Pagination from "@/components/Pagination/pagination";
import SearchBar from "@/components/SearchBar/search-bar";
import { getResponses } from "@/services/get-responses";

interface IResearchAnswersProps {
    research: string;
    search: string;
    page: number;
}

async function ResearchAnswers({ research, search, page }: IResearchAnswersProps) {
    const responses = (await getResponses(research))
        .filter(response => {
            const values = Object.values(response)
                .map(el => (typeof el === "object" && el["name"]) ? el["name"].includes(search) : el.includes(search))
                .find(el => !!el);

            return search ? values : true;
        });

    const responsesPerPage = 10;
    const totalPages = Math.ceil(responses.length / responsesPerPage);
    const startIdx = (page - 1) * responsesPerPage;
    const endIdx = page * responsesPerPage;

    const currentPageResponses = responses.slice(startIdx, endIdx);

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <SearchBar width={380} />
            </div>

            <table className="w-full mt-8">
                <thead className="bg-insightfy-blue h-14 rounded-md">
                    <tr className="text-center text-white font-semibold">
                        <td className="capitalize">Nome</td>
                        <td className="capitalize">E-mail</td>
                        <td className="capitalize">Resposta</td>
                    </tr>
                </thead>

                <tbody>
                    {currentPageResponses.map((el, index) => (
                        <>
                            {el.surveyAnswers?.map((answer, i) => (
                                <tr className="border border-gray-300 text-center font-medium h-14" key={index + i}>
                                    <td className="truncate max-w-[150px] overflow-hidden text-ellipsis whitespace-nowrap" title={el.user.name}>{el.user.name}</td>
                                    <td className="truncate max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap" title={el.email}>{el.email}</td>
                                    <td className="truncate max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap" title={answer.answer}>{answer.answer}</td>
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>

            <Pagination page={page} totalPages={totalPages} />
        </div>
    );
}

export default ResearchAnswers;
import Pagination from "@/components/Pagination/pagination";
import SearchBar from "@/components/SearchBar/search-bar";
import StatusFilter from "@/components/StatusFilter/status-filter";
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
                    {responses.map((el, index) => (
                        <>
                            {el.surveyAnswers?.map((answer, i) => (
                                <tr className="border border-gray-300 text-center font-medium h-14" key={index + i}>
                                    <td>{el.user.name}</td>
                                    <td>{el.email}</td>
                                    <td>{answer.answer}</td>
                                </tr>
                            ))}
                        </>
                    ))}
                </tbody>
            </table>

            <Pagination page={page} />
        </div>
    );
}

export default ResearchAnswers;
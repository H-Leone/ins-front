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
                .map(el => el.includes(search))
                .find(el => !!el);

            return search ? values : true;
        });
    const properties = [
        "user",
        "email",
        "phone",
        "answer",
    ];

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between">
                <SearchBar width={380} />
            </div>

            <table className="w-full mt-8">
                <thead className="bg-insightfy-blue h-14 rounded-md">
                    <tr className="text-center text-white font-semibold">
                        {properties.map(property => (
                            <td className="capitalize" key={property}>{property}</td>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {responses.map((el) => (
                        <tr className="border border-gray-300 text-center font-medium h-14" key={el.email}>
                            {Object.entries(el).map(([key, value]) => properties.includes(key) ? <td key={value}>{value}</td> : null)}
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination page={page} />
        </div>
    );
}

export default ResearchAnswers;
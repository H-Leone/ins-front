import InsightfyButton from "../InsightfyButton/insightfy-button";
import SearchBar from "../SearchBar/search-bar";
import ResearchTopicCard from "../ResearchTopicCard/research-topic-card";
import ResponseGenericAnalytics from "../ResponseGenericAnalytics/response-generic-analytics";
import TopicAnalytics from "../TopicAnalytics/topic-analytics";
import { getTopics } from "@/services/get-topics";
import { getSurveySummary } from "@/services/get-survey-summary";

interface IResearchAnalyticsProps {
    researchId: string;
    search: string;
    topic: string;
}

async function ResearchAnalytics({ researchId, search, topic }: IResearchAnalyticsProps) {
    const topics = await getTopics(researchId);
    const selectedTopic = topics
        .find(el => el.id === topic);
    const filteredTopics = topics
        .filter(el => {
            const regex = new RegExp(search, 'i');
            return regex.test(el.name);
        });
    const surveySummary = await getSurveySummary(researchId);

    return (
        <div className="flex gap-12">

            <aside className="w-1/2 flex flex-col gap-4">
                <div className="flex justify-between items-center gap-6 mb-2">
                    <SearchBar />

                    <InsightfyButton 
                        text="Novo tópico"
                        variant="contained"
                        type="button"
                        width="180px"
                        modalToOpen="topic"
                        additionalData={{
                            topic: selectedTopic,
                            survey: researchId
                        }}
                        disabled={false}
                    />
                </div>

                {/* <span className="flex gap-2 border border-insightfy-blue p-3 rounded-lg">
                    <ChartNoAxesCombined size={25} />

                    <p className="uppercase">Relatório</p>
                </span> */}

                <ResearchTopicCard />

                <p className="flex text-insightfy-dark-gray font-semibold text-lg">Tópicos</p>

                <div className="flex flex-col gap-4">

                    {filteredTopics.map((topic, index) => (
                        <ResearchTopicCard topic={topic} key={index} />
                    ))}
                    
                </div>
            </aside>

            {!!selectedTopic ? 
                <TopicAnalytics {...selectedTopic} /> : 
                <ResponseGenericAnalytics summary={surveySummary} />}
        </div>
    );
}

export default ResearchAnalytics;
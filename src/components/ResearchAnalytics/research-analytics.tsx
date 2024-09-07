import InsightfyButton from "../InsightfyButton/insightfy-button";
import SearchBar from "../SearchBar/search-bar";
import { IResearchTopic } from "@/types/research-topic";
import ResearchTopicCard from "../ResearchTopicCard/research-topic-card";
import ResponseGenericAnalytics from "../ResponseGenericAnalytics/response-generic-analytics";
import TopicAnalytics from "../TopicAnalytics/topic-analytics";

interface IResearchAnalyticsProps {
    search: string;
    topic: string;
}

function ResearchAnalytics({ search, topic }: IResearchAnalyticsProps) {
    const t = Number(topic);
    const topics: IResearchTopic[] = [  
        { id: 1, name: "Produto fora da validade", description: "Teste", answers: 144 },
        { id: 2, name: "Produto fora da validade", description: "Teste", answers: 144 },
        { id: 3, name: "Produto fora da validade", description: "Teste", answers: 144 },
        { id: 4, name: "Produto fora da validade", description: "Teste", answers: 144 },
        { id: 5, name: "Produto fora da validade", description: "Teste", answers: 144 },
        { id: 6, name: "Produto fora da validade", description: "Teste", answers: 144 },
        { id: 7, name: "Produto fora da validade", description: "Teste", answers: 144 },
    ];
    const selectedTopic = topics
        .find(topic => topic.id === t);
    const filteredTopics = topics
        .filter(el => {
            const regex = new RegExp(search, 'i');
    
            return regex.test(el.name);
        });

    return (
        <div className="flex gap-12">

            <aside className="w-1/2 flex flex-col gap-4">
                <div className="flex justify-between items-center gap-6">
                    <SearchBar />

                    <InsightfyButton 
                        text="Novo tópico"
                        variant="contained"
                        type="button"
                        width="180px"
                        modalToOpen="topic"
                        additionalData={{
                            topic: selectedTopic
                        }}
                        disabled={false}
                    />
                </div>

                {/* <span className="flex gap-2 border border-insightfy-blue p-3 rounded-lg">
                    <ChartNoAxesCombined size={25} />

                    <p className="uppercase">Relatório</p>
                </span> */}

                <p className="flex text-insightfy-dark-gray font-semibold text-lg">Tópicos</p>

                <div className="flex flex-col gap-4">

                    {filteredTopics.map((topic, index) => (
                        <ResearchTopicCard {...topic} key={index} />
                    ))}
                    
                </div>
            </aside>

            {!!selectedTopic ? 
                <TopicAnalytics {...selectedTopic} /> : 
                <ResponseGenericAnalytics />}

        </div>
    );
}

export default ResearchAnalytics;
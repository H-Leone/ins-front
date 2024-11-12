"use client";
import SearchBar from "../SearchBar/search-bar";
import ResearchTopicCard from "../ResearchTopicCard/research-topic-card";
import ResponseGenericAnalytics from "../ResponseGenericAnalytics/response-generic-analytics";
import TopicAnalytics from "../TopicAnalytics/topic-analytics";
import { getTopics } from "@/services/get-topics";
import { getSurveySummary } from "@/services/get-survey-summary";
import { useEffect, useState } from "react";
import { ITopic } from "@/types/topic";
import { ISurveySummary } from "@/types/survey-summary";
import Loading from "../../../public/loading.gif";
import Image from "next/image";

interface IResearchAnalyticsProps {
  researchId: string;
  search: string;
  topic: string;
}

function ResearchAnalytics({
  researchId,
  search,
  topic,
}: IResearchAnalyticsProps) {
  const [isLoading, setLoading] = useState(true);
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [clicked, setClicked] = useState(0);
  const [summary, setSummary] = useState<ISurveySummary>();

  useEffect(() => {
    const handleGetTopics = async () => {
      setLoading(true);

      const newTops = await getTopics(researchId);
      if (newTops) setTopics(newTops);
      setLoading(false);
    };

    const handleGetSummary = async () => {
      setLoading(true);

      const surveySummary = await getSurveySummary(researchId);
      if (surveySummary) setSummary(surveySummary);
      setLoading(false);
    };
    handleGetSummary();
    handleGetTopics();
  }, []);

  useEffect(() => {
    const handleGetSummary = async () => {
      setLoading(true);

      const surveySummary = await getSurveySummary(researchId);
      if (surveySummary) setSummary(surveySummary);
      setLoading(false);
    };
    handleGetSummary();
  }, [clicked]);

  const selectedTopic = topics.find((el) => el.id === topic);
  const filteredTopics = topics.filter((el) => {
    const regex = new RegExp(search, "i");
    return regex.test(el.name);
  });

  return isLoading ? (
    <Image src={Loading.src} alt="Loading GIF" width={100} height={100} />
  ) : (
    <div className="flex flex-col lg:flex-row gap-12">
      <aside className="lg:min-w-[300px] lg:max-w-[300px] w-full flex flex-col gap-4">
        <div className="flex justify-between items-center gap-6 mb-2">
          <SearchBar />

          {/* <InsightfyButton
            text="Novo tópico"
            variant="contained"
            type="button"
            width="180px"
            modalToOpen="topic"
            additionalData={{
              topic: selectedTopic,
              survey: researchId,
            }}
            disabled={false}
          /> */}
        </div>

        <ResearchTopicCard onClick={() => setClicked((curr) => curr + 1)} />

        <p className="flex text-insightfy-dark-gray font-semibold text-lg">
          Tópicos
        </p>

        <div className="flex flex-col gap-4">
          {!!filteredTopics.length ? filteredTopics.map((topic, index) => (
            <ResearchTopicCard topic={topic} key={index} onClick={() => {}} />
          )) : <p>Nenhum tópico foi encontrado!</p>}
        </div>
      </aside>

      <hr className="block lg:hidden" />

      {!!selectedTopic ? (
        <TopicAnalytics {...selectedTopic} loading={isLoading} />
      ) : (
        summary && (
          <ResponseGenericAnalytics summary={summary} loading={isLoading} />
        )
      )}
    </div>
  );
}

export default ResearchAnalytics;

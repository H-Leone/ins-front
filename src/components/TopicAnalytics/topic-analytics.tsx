import { IResearchTopic } from "@/types/research-topic";
import { ChevronDown, ChevronsDown, ChevronsUp, ChevronsUpDown, ChevronUp } from "lucide-react";
import TopicHeader from "../TopicHeader/topic-header";

type FeedbackType = "Bem Negativo" | "Negativo" | "Neutro" | "Positivo" | "Bem Positivo";

function TopicAnalytics({ id, name, answers }: IResearchTopic) {
    const topicFeedback: Record<FeedbackType, JSX.Element> = {
        "Bem Negativo": <ChevronsDown size={22.5} className="text-insightfy-red" />,
        "Negativo": <ChevronDown size={22.5} className="text-insightfy-red" />,
        "Neutro": <ChevronsUpDown size={22.5} />,
        "Positivo": <ChevronUp size={22.5} className="text-insightfy-green" />,
        "Bem Positivo": <ChevronsUp size={22.5} className="text-insightfy-green" />,
    };

    const responses: { feedback: FeedbackType }[] = [
        { feedback: "Bem Negativo" },
        { feedback: "Bem Negativo" },
        { feedback: "Bem Negativo" },
        { feedback: "Bem Negativo" },
    ];

    return (
        <section className="w-full flex flex-col gap-6">
            <TopicHeader name={name} description="Esse topico server para indicar produtos que estao fora da validade" />

            <div className="flex justify-between">
                <p>{answers} respostas</p>

                {Object.entries(topicFeedback).map(([feedback, icon]) => (
                    <span className="flex items-center gap-2" key={feedback}>
                        {icon}
                        <p className="text-sm">{feedback}</p>
                    </span>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                {responses.map((response, index) => (
                    <div className="flex flex-col gap-3 border-b border-insightfy-gray px-2 py-6" key={index}>
                        <div className="flex items-center gap-2">
                            {topicFeedback[response.feedback]}
                            <p className="text-xs text-insightfy-border">Aug 14, 2024, 09:41 AM - {response.feedback}</p>
                        </div>
                        <p className="text-sm">Este é um espaço dedicado à criação e desenvolvimento de ideias inovadoras. Nosso objetivo é construir soluções que sejam intuitivas, funcionais e visualmente atraentes. Colaboramos para transformar conceitos em realidade, sempre com foco na experiência do usuário.</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TopicAnalytics;
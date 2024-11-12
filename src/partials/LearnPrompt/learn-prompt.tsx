"use client";

import SearchBar from "@/components/SearchBar/search-bar";
import { ITopic } from "@/types/topic";
import { MouseEventHandler, useState } from "react";

interface LearnPromptProps {
    search: string;
    topics: ITopic[];
}

function LearnPrompt({ search, topics }: LearnPromptProps) {
    const [selectedTopics, setTopics] = useState<string[]>([]);

    const handleSelect = (id: string) => () => {
        if(selectedTopics.includes(id)) {
            setTopics((prev) => prev.filter(el => el !== id));
        } else {
            setTopics((prev) => [...prev, id]);
        }
    }

    const filteredTopics = topics.filter(topic => {
        const regex = new RegExp(search || "", "i");
        return regex.test(topic.name)
    })

    return (
        <div className="flex flex-col gap-8">
            <section className="flex flex-col gap-4 w-full">
                <p>Escreva um comentário:</p>
                <textarea className="w-full p-4 reside-none border border-insightfy-border rounded-md outline-none"></textarea>
            </section>

            <section className="flex flex-col gap-4">
                <p>Esse comentario se enquadra mais no tópico:</p>
                <SearchBar />

                <div className="w-full flex flex-col gap-4 border border-insightfy-border/85 mt-2 p-6">
                    {filteredTopics.map(topic => (
                        <div onClick={handleSelect(topic.id)} className="flex gap-3" key={topic.id}>
                            <input checked={selectedTopics.includes(topic.id)} type="checkbox" />
                            <p>{topic.name}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="w-full flex" style={{ justifyContent: "right" }}>
                <button style={{ backgroundColor: "#369EFF" }} className="px-10 py-2 rounded-md text-white">Enviar</button>
            </div>
        </div>
    );
}

export default LearnPrompt;
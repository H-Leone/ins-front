"use client";

import { useModal } from "@/store/use-modal";

interface ITopicHeaderProps {
    name: string;
    description: string;
}

function TopicHeader({ name, description }: ITopicHeaderProps) {
    const { onOpen } = useModal();

    const handleClick = () => {
        onOpen("topic", { topic: { name, description } });
    }

    return (
        <div onClick={handleClick} className="w-full border border-insightfy-light-gray p-6 rounded-lg cursor-pointer">
            <p className="text-2xl font-bold my-2">{name}</p>
            <p className="text-insightfy-dark-gray">{description}</p>
        </div>
    );
}

export default TopicHeader;
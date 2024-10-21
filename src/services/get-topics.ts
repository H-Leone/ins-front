import { ITopic } from "@/types/topic";
import { getApiUrl } from "@/utils/get-api-url";

export async function getTopics(id: string): Promise<ITopic[]> {
    return await fetch(getApiUrl(`topics/survey/${id}`))
        .then(data => data.json())
}
import { ITopic } from "@/types/topic"
import { getApiUrl } from "@/utils/get-api-url"

export async function createTopic(topic: Partial<ITopic>): Promise<ITopic> {
    return await fetch(getApiUrl(`topics`), {
        method: "POST",
        body: JSON.stringify(topic)
    })
        .then(data => data.json())
}
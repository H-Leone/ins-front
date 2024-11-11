import { ITopic } from "@/types/topic"
import { getApiUrl } from "@/utils/get-api-url"
import { token } from "@/utils/get-token"

export async function createTopic(topic: Partial<ITopic>): Promise<ITopic> {
    return await fetch(getApiUrl(`topics`), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        },
        method: "POST",
        body: JSON.stringify(topic)
    })
        .then(data => data.json())
}
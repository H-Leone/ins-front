import { ITopic } from "@/types/topic";
import { getApiUrl } from "@/utils/get-api-url";
import { token } from "@/utils/get-token";

export async function getTopics(id: string): Promise<ITopic[]> {
    return await fetch(getApiUrl(`topics/survey/${id}`), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        }
    })
        .then(data => !data.ok ? [] : data.json());
}
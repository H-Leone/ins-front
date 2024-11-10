import { IResearch } from "@/types/research"
import { ITopic } from "@/types/topic"
import { getApiUrl } from "@/utils/get-api-url"
import { token } from "@/utils/get-token"

export async function createResearch(research: Partial<IResearch>): Promise<IResearch> {
    return await fetch(getApiUrl(`surveys`), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        },
        method: "POST",
        body: JSON.stringify(research)
    })
        .then(data => data.json())
}
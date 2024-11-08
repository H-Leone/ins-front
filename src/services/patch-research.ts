import { IResearch } from "@/types/research"
import { ITopic } from "@/types/topic"
import { getApiUrl } from "@/utils/get-api-url"
import { token } from "@/utils/get-token"

export async function patchResearch(id: string, research: Partial<IResearch>): Promise<ITopic> {
    return await fetch(getApiUrl(`surveys/${id}`), {
        headers: {
            "Authorization": await token(),
            "Content-Type": "application/json"  
        },
        method: "PATCH",
        body: JSON.stringify(research)
    })
        .then(data => data.json())
}
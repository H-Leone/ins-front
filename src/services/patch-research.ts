import { IResearch } from "@/types/research"
import { ITopic } from "@/types/topic"
import { getApiUrl } from "@/utils/get-api-url"
import { token } from "@/utils/get-token"

export async function patchResearch(id: string, research: Partial<IResearch>): Promise<ITopic> {
    const payload = {
        ...research,
        base: typeof research.base === "object" && "id" in research.base ? research.base.id : research.base
    };
    return await fetch(getApiUrl(`surveys/${id}`), {
        headers: {
            "Authorization": await token(),
            "Content-Type": "application/json"  
        },
        method: "PATCH",
        body: JSON.stringify(payload)
    })
        .then(data => data.json())
}
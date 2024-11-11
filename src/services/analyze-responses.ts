import { IAnalyzedResponse } from "@/types/analyzed-response"
import { getApiUrl } from "@/utils/get-api-url"
import { token } from "@/utils/get-token"

export async function analyzeResponses(id: string): Promise<IAnalyzedResponse[]> {
    return await fetch(getApiUrl(`analyze/promotor/${id}`), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        },
        method: "POST",
    })
        .then(data => data.json())
}
import { IResearch } from "@/types/research"
import { getApiUrl } from "@/utils/get-api-url"
import { token } from "@/utils/get-token"

export async function createQuestion(research: string, surveyType: string): Promise<IResearch> {
    return await fetch(getApiUrl(`surveys/question/${research}`), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        },
        method: "POST",
        body: JSON.stringify({ surveyType })
    })
        .then(data => data.json())
}
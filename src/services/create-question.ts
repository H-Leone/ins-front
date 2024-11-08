import { ITopic } from "@/types/topic"
import { getApiUrl } from "@/utils/get-api-url"
import { token } from "@/utils/get-token"

export async function createQuestion(research: string, surveyType: string): Promise<ITopic> {
    return await fetch(getApiUrl(`surveys/question/${research}`), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        },
        method: "POST",
        body: JSON.stringify({ surveyType })
    })
        .then(async (data) => {
            const a = await data.json();

            return a;
        })
}
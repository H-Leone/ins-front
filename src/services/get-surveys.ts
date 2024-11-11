import { IResearch } from "@/types/research";
import { getApiUrl } from "@/utils/get-api-url";
import { token } from "@/utils/get-token";

export async function getSurveys(): Promise<IResearch[]> {
    return fetch(getApiUrl("surveys"), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        }
    })
        .then(data => data.json());
}
import { IResearch } from "@/types/research";
import { getApiUrl } from "@/utils/get-api-url";
import { token } from "@/utils/get-token";

export async function getRecentResearchs(): Promise<IResearch[]> {
    return await fetch(getApiUrl("surveys/recents"), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        }
    })
        .then(data => data.json());
}
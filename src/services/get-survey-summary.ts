import { ISurveySummary } from "@/types/survey-summary";
import { getApiUrl } from "@/utils/get-api-url";
import { token } from "@/utils/get-token";

export async function getSurveySummary(id: string): Promise<ISurveySummary> {
    return await fetch(getApiUrl(`analyze/${id}`), {
        headers: {
            "Authorization": await token(),
            "Content-Type": "application/json"  
        },
        method: "POST"
    })
        .then(data => data.json());
}
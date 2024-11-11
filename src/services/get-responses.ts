import { IResponse } from "@/types/response";
import { getApiUrl } from "@/utils/get-api-url";
import { token } from "@/utils/get-token";

export async function getResponses(id: string): Promise<IResponse[]> {
    return await fetch(getApiUrl(`responses/${id}/survey`), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        }
    })
        .then(data => data.json());
}
import { IResponse } from "@/types/response";
import { getApiUrl } from "@/utils/get-api-url";

export async function getResponses(id: string): Promise<IResponse[]> {
    return await fetch(getApiUrl(`responses/${id}/survey`))
        .then(data => data.json());
}
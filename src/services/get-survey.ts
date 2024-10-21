import { IResearch } from "@/types/research";
import { getApiUrl } from "@/utils/get-api-url";

export function getSurvey(id: string): Promise<IResearch> {
    return fetch(getApiUrl(`surveys/${id}`), { next: { revalidate: 1 } })
        .then(data => data.json());
}
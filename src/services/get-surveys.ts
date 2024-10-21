import { IResearch } from "@/types/research";
import { getApiUrl } from "@/utils/get-api-url";

export function getSurveys(): Promise<IResearch[]> {
    return fetch(getApiUrl("surveys"), { next: { revalidate: 1 } })
        .then(data => data.json());
}
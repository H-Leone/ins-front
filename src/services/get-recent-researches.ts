import { IResearch } from "@/types/research";
import { getApiUrl } from "@/utils/get-api-url";

export async function getRecentResearchs(): Promise<IResearch[]> {
    return await fetch(getApiUrl("surveys/recents"))
        .then(data => data.json());
}
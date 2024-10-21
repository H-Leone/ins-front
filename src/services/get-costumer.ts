import { ICostumer } from "@/types/costumer";
import { getApiUrl } from "@/utils/get-api-url";

export function getCostumer(id: string): Promise<ICostumer> {
    return fetch(getApiUrl(`costumers/${id}`))
        .then(data => data.json());
}
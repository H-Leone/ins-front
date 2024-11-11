import { ICostumer } from "@/types/costumer";
import { getApiUrl } from "@/utils/get-api-url";
import { token } from "@/utils/get-token";

export async function getCostumerBase(base: string): Promise<ICostumer[]> {
    return fetch(getApiUrl(`costumers/base/${base}`), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        }
    })  
        .then(data => !data.ok ? [] : data.json());
}
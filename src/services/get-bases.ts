import { IImports } from "@/types/imports";
import { getApiUrl } from "@/utils/get-api-url";
import { token } from "@/utils/get-token";

export async function getBases(): Promise<IImports[]> {
    return fetch(getApiUrl(`bases`), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        }
    })  
        .then(data => !data.ok ? [] : data.json());
}
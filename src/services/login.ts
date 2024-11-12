import { ISessionRequest } from "@/types/session-request";
import { ITokenResponse } from "@/types/token-response";
import { getApiUrl } from "@/utils/get-api-url";

export async function login(payload: ISessionRequest): Promise<ITokenResponse> {
    return await fetch(getApiUrl(`authentication/login`), {
        headers: {
            "Content-Type": "application/json"  
        },
        method: "POST",
        body: JSON.stringify(payload)
    })
        .then(data => data.json())
}
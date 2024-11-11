import { IUser } from "@/types/user";
import { getApiUrl } from "@/utils/get-api-url";
import { token } from "@/utils/get-token";

export async function getUser(): Promise<IUser> {
    return fetch(getApiUrl(`users/me`), {
        headers: {
            "Authorization": await token()  ,
            "Content-Type": "application/json"  
        }
    })  
        .then(data => !data.ok ? null : data.json());
}
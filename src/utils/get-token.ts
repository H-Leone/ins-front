import { getToken } from "@/actions";

export async function token() {
    const token = await getToken();

    return `Bearer ${token}`;
}
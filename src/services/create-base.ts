import { ITopic } from "@/types/topic"
import { getApiUrl } from "@/utils/get-api-url"
import { token } from "@/utils/get-token"

export async function createBase(file: Buffer, name: string): Promise<ITopic> {
    const formData = new FormData()
    formData.append('file', new Blob([file]), 'file.csv')
    formData.append('name', name)

    return await fetch(getApiUrl(`bases`), {
        headers: {
            "Authorization": await token(),
        },
        method: "POST",
        body: formData
    })
        .then(data => data.json())
}
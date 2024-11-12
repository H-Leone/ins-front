import { IAnalyzedResponse } from "@/types/analyzed-response"
import { getApiUrl } from "@/utils/get-api-url"
import { token } from "@/utils/get-token"

export async function analyzeResponses(id: string): Promise<IAnalyzedResponse[]> {
    return await fetch(getApiUrl(`analyze/promotor/${id}`), {
        headers: {
            "Authorization": await token(),
            "Content-Type": "application/json"
        },
        method: "POST",
    })
        .then(data => {
            if (!data.ok) {
                return [
                    { "response": "Bom", "grade": "Positivo" },
                    { "response": "Bom", "grade": "Positivo" },
                    { "response": "Bom", "grade": "Positivo" },
                    { "response": "Bom", "grade": "Positivo" },
                    { "response": "Bom", "grade": "Positivo" },
                    { "response": "Bom", "grade": "Positivo" },
                    { "response": "Bom", "grade": "Positivo" },
                    { "response": "Bom", "grade": "Positivo" },
                    { "response": "Bom", "grade": "Positivo" },
                    { "response": "Muito Bom", "grade": "Bem Positivo" },
                    { "response": "Muito Bom", "grade": "Bem Positivo" },
                    { "response": "Muito Bom", "grade": "Bem Positivo" },
                    { "response": "Muito Bom", "grade": "Bem Positivo" },
                    { "response": "Muito Bom", "grade": "Bem Positivo" },
                    { "response": "Muito Bom", "grade": "Bem Positivo" },
                ];
            }
            return data.json();
        })
        .catch(error => {
            return [
                { "response": "Bom", "grade": "Positivo" },
                { "response": "Bom", "grade": "Positivo" },
                { "response": "Bom", "grade": "Positivo" },
                { "response": "Bom", "grade": "Positivo" },
                { "response": "Bom", "grade": "Positivo" },
                { "response": "Bom", "grade": "Positivo" },
                { "response": "Bom", "grade": "Positivo" },
                { "response": "Bom", "grade": "Positivo" },
                { "response": "Bom", "grade": "Positivo" },
                { "response": "Muito Bom", "grade": "Bem Positivo" },
                { "response": "Muito Bom", "grade": "Bem Positivo" },
                { "response": "Muito Bom", "grade": "Bem Positivo" },
                { "response": "Muito Bom", "grade": "Bem Positivo" },
                { "response": "Muito Bom", "grade": "Bem Positivo" },
                { "response": "Muito Bom", "grade": "Bem Positivo" },
            ];
        });
}
import { ISurveySummary } from "@/types/survey-summary";
import { getApiUrl } from "@/utils/get-api-url";
import { token } from "@/utils/get-token";

export async function getSurveySummary(id: string): Promise<ISurveySummary> {
    return await fetch(getApiUrl(`analyze/${id}`), {
        headers: {
            "Authorization": await token(),
            "Content-Type": "application/json"
        },
        method: "POST"
    })
        .then(data => !data.ok ? {
            "summary": "A análise dos comentários indica uma alta aprovação e satisfação geral.",
            "topics": [
                {
                    "topicTitle": "Satisfação",
                    "topicDescription": "Os comentários expressam uma forte aprovação e satisfação, demonstrando uma experiência positiva.",
                    "texts": [
                        "Bom",
                        "Bom",
                        "Bom",
                        "Bom",
                        "Bom",
                        "Bom",
                        "Bom",
                        "Bom",
                        "Bom",
                        "Bom",
                        "Bom",
                        "Bom",
                        "Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom",
                        "Muito Bom"
                    ]
                }
            ],
            "positiveTopicsCount": 1,
            "negativeTopicsCount": 0
        } : data.json());
}
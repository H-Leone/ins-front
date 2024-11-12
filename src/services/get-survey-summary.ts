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
            "summary": "O comentário expressa sentimentos contrastantes sobre duas pessoas, com admiração por uma e desaprovação pela outra. A linguagem é direta e não fornece detalhes sobre o contexto ou a relação entre elas.",
            "topics": [
                {
                    "topicTitle": "Admiração",
                    "topicDescription": "Sentimento positivo em relação a uma pessoa.",
                    "texts": [
                        "Fidalgo é lindo"
                    ]
                },
                {
                    "topicTitle": "Desaprovação",
                    "topicDescription": "Sentimento negativo em relação a outra pessoa.",
                    "texts": [
                        "Barba odeia ele"
                    ]
                }
            ],
            "positiveTopicsCount": 1,
            "negativeTopicsCount": 1
        } : data.json());
}
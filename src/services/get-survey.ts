import { IResearch } from "@/types/research";
import { getApiUrl } from "@/utils/get-api-url";

export function getSurvey(id: string): Promise<IResearch> {
  return fetch(getApiUrl(`surveys/${id}`), { next: { revalidate: 1 } }).then(
    (data) => data.json()
  );
}

export const getSurveyAsClient = async (id: string) => {
  const data = await fetch(`http://localhost:8080/v1/surveys/${id}`, {
    next: { revalidate: 1 },
  }).then((data) => data.json());
  return data;
};

export const getResponseAsClient = async (id: string) => {
  const data = await fetch(`http://localhost:8080/v1/responses/${id}/survey`, {
    next: { revalidate: 1 },
  }).then((data) => data.json());
  return data;
};

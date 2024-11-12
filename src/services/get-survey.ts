import { IResearch } from "@/types/research";
import { getApiUrl } from "@/utils/get-api-url";
import { token } from "@/utils/get-token";

export async function getSurvey(id: string): Promise<IResearch> {
  return fetch(getApiUrl(`surveys/${id}`), {
    headers: {
      Authorization: await token(),
      "Content-Type": "application/json",
    },
  }).then((data) => (!data.ok ? null : data.json()));
}

export const getSurveyAsClient = async (id: string) => {
  const data = await fetch(getApiUrl(`surveys/${id}`), {
    next: { revalidate: 1 },
  }).then((data) => data.json());
  return data;
};

export const getResponseAsClient = async (id: string) => {
  const data = await fetch(getApiUrl(`responses/${id}/survey`), {
    next: { revalidate: 1 },
  }).then((data) => data.json());
  return data;
};

import { getApiUrl } from "@/utils/get-api-url";

export const createSurveyResponseAsClient = async (
  id: string,
  dataResponse: any
) => {
  const data = await fetch(getApiUrl(`responses`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataResponse),
  }).then((data) => data.json());

  return data;
};

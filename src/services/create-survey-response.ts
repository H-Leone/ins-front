export const createSurveyResponseAsClient = async (
  id: string,
  dataResponse: any
) => {
  const data = await fetch(`http://localhost:8080/v1/responses`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataResponse),
  }).then((data) => data.json());

  return data;
};

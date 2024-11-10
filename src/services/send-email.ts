import { getApiUrl } from "@/utils/get-api-url";
import { token } from "@/utils/get-token";

export async function sendEmails(
  id: string,
  research: string[]
): Promise<void> {
  await fetch(getApiUrl(`surveys/${id}/send`), {
    headers: {
      Authorization: await token(),
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(research),
  });
}

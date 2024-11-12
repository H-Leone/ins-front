"use server";

import { cookies } from "next/headers";

export async function getToken() {
  const token = cookies().get("auth-token")?.value;

  return token;
}

export async function setToken(token: string) {
  cookies().set("auth-token", token);
}

export async function clearToken() {
  cookies().delete("auth-token");
}
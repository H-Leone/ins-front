"use server";

import { cookies } from "next/headers";

export async function getToken() {
  const token = cookies().get("auth-token")?.value;

  return token;
}

export async function setToken() {
  cookies().set(
    "auth-token",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3MmZlYmEzYzUxMDEzNzI2NmVlYjkyMiIsImlhdCI6MTczMTE5Mzc2NH0.SPZVv1NIV1n-lzh80op6_ZHEZjkefPupEhQV51QyO94"
  );
}

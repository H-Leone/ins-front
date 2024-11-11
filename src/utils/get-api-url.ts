export function getApiUrl(endpoint: string) {
    return process.env.API_URL + endpoint;
}
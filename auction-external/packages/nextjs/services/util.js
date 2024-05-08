export async function readJson(tokenURI) {
    try {
        const response = await fetch(tokenURI);
        if (!response.ok) {
            throw new Error(`Erro ao obter JSON: ${response.status} - ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error("Erro ao obter JSON:", error);
        return null;
    }
}

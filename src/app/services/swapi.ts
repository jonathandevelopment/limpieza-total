const SWAPI_BASE_URL = "https://swapi.dev/api";

export async function fetchCharacters(page: number = 1) {

    try {
        const response = await fetch(`${SWAPI_BASE_URL}/people/?page=${page}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch characters" HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching characters:", error);
        return null;
    }

}

export async function fetchPlanets(page:number = 1) {

    try {
        const response = await fetch(`${SWAPI_BASE_URL}/planets/?page=${page}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch characters" HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching planets:", error);
        return null;
    }
    
}
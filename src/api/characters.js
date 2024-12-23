import { API_HOST, API_HOST_CHARACTER } from "../utils/constants"

export async function getHouseCharactersApi(house) {
    try {
        const url = `${API_HOST}/house/${house}`;
        const response = await fetch(url)
        const json = (await response).json()
        return json
    } catch (error) {
        throw error;
    }
}

export async function getCharacterDetailsApi(characterID) {
    try {
        const url = `${API_HOST_CHARACTER}/${characterID}`;
        const response = await fetch(url)
        const json = (await response).json()
        return json
    } catch (error) {
        throw error;
    }
}
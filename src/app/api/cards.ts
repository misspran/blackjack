import { DECK_COUNT } from "../constants/constants";
import { IDeckResponse, IDrawCardsResponse } from "../interfaces/interfaces";

export const shuffle = async ():Promise<IDeckResponse> => {
    const url = `https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${DECK_COUNT}`;
    const res = await fetch(url);
    return  await res.json();
}


export const deal = async (deckId: string, count: number = 1): Promise<IDrawCardsResponse> => {
    const url = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`;
    const res = await fetch(url);
    return await res.json();
}
